import { Component, OnInit, ChangeDetectorRef, AfterViewInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { forkJoin, Observable } from 'rxjs'; 
import { Chart, ChartData, ChartOptions } from 'chart.js';
import { Estadisticas } from "../estadisticas/estadisticas";
// import { HttpClientModule } from '@angular/common/http';

// --- INTERFACES ---
interface CsvFile {
    url: string;
    key: string; 
    data: any[];
}

interface PillarScore {
    name: string;
    score: number;
    num: string; // Para referencia de código
}

@Component({
    selector: 'app-dashboard',
    imports: [
    CommonModule,
    FormsModule,
    Estadisticas
],
    standalone: true,
    templateUrl: './dashboard.html', 
    styleUrl: './dashboard.css', 
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {

    public rawPillarScores: PillarScore[] = [];

    public chartInstance: Chart<'bar'> | null = null;
    dataLoaded: boolean = false; 
    
    // --- PROPIEDADES DE DATOS ---
    private csvFiles: CsvFile[] = [
        { url: 'assets/data.csv', key: 'data', data: [] }, 
        { url: 'assets/economies.csv', key: 'economies', data: [] },
        { url: 'assets/indexstructure.csv', key: 'structure', data: [] },
        { url: 'assets/metadata.csv', key: 'metadata', data: [] },
    ];
    
    selectedCountryISO3: string = 'COL'; 
    availableCountries: { iso3: string, name: string }[] = [];

    get selectedCountryName(): string {
        const country = this.availableCountries.find(c => c.iso3 === this.selectedCountryISO3);
        return country ? country.name : this.selectedCountryISO3;
    }
    
    // --- PROPIEDADES DEL GRÁFICO ---
    barChartType: 'bar' = 'bar'; 
    
    barChartOptions: ChartOptions<'bar'> = {
        responsive: true,
        maintainAspectRatio: false, 
        scales: {
            y: {
                beginAtZero: true,
                max: 100, 
                title: { display: true, text: 'Puntaje Normalizado (0-100)' }
            },
            x: {
                ticks: { autoSkip: false, maxRotation: 45, minRotation: 45 }
            }
        },
        plugins: {
            legend: { display: false }
        }
    };

    // Inicialización robusta del dataset (no vacío)
    public barChartData: ChartData<'bar'> = {
        labels: [], 
        datasets: [{ 
            data: [], 
            label: 'Puntaje de Pilar',
            backgroundColor: 'rgba(54, 162, 235, 0.5)', 
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(54, 162, 235, 0.7)',
            hoverBorderColor: 'rgb(54, 162, 235)'
        }] 
    };
    
    // --- CONSTRUCTOR Y CICLO DE VIDA ---
    constructor(private http: HttpClient, private cdRef: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.loadAllCsvData(); 
    }

    ngAfterViewInit(): void {
        if (this.dataLoaded) {
            this.createChart();
        }
        this.cdRef.detectChanges();
    }
    
    ngOnDestroy(): void {
        this.chartInstance?.destroy();
    }
    
    // --- LÓGICA DE CHART.JS ---
    private createChart(): void {
        const ctx = document.getElementById('pillarChart') as HTMLCanvasElement;
        if (!ctx) return;
        
        // Destruye la instancia anterior antes de crear una nueva
        this.chartInstance?.destroy(); 
        
        // El gráfico se crea con la data que ha sido actualizada en mapDataToChart
        this.chartInstance = new Chart(ctx, {
            type: this.barChartType,
            data: this.barChartData, 
            options: this.barChartOptions
        });
        
        // Si se llama desde loadAllCsvData, necesitamos llenar la data por primera vez
        if (!this.rawPillarScores.length) {
            this.mapDataToChart(); 
        }
    }

    // 🎯 AJUSTE: Función simplificada para solo actualizar arrays internos
    private updateChartData(labels: string[], scores: number[]): void {
        if (this.chartInstance) {
            if (this.chartInstance.data.datasets.length === 0) {
                 this.chartInstance.data.datasets.push(
                    { data: [], label: 'Puntaje de Pilar' }
                 );
            }
            
            this.chartInstance.data.labels = labels;
            this.chartInstance.data.datasets[0].data = scores;
            // 🚨 Eliminamos el this.chartInstance.update() de aquí. Se llamará en createChart.
            console.log(`Gráfico actualizado en memoria. Longitud de datos: ${scores.length}`);
        } else {
            // Si el gráfico no existe (en la inicialización), actualizamos barChartData directamente
             this.barChartData.labels = labels;
             if (this.barChartData.datasets.length > 0) {
                this.barChartData.datasets[0].data = scores;
             }
        }
    }
    
    // --- MÉTODOS DE CARGA Y PROCESAMIENTO ---
    private loadAllCsvData(): void {
        const observables: Observable<string>[] = this.csvFiles.map(file => 
            this.http.get(file.url, { responseType: 'text' })
        );

        forkJoin(observables).subscribe({
            next: (csvTexts: string[]) => {
                csvTexts.forEach((csvText, index) => {
                    this.csvFiles[index].data = this.processCsvText(csvText);
                });
                
                this.initializeData();
                this.dataLoaded = true; 
                
                setTimeout(() => {
                    this.mapDataToChart(); // Llenar la data inicial antes de crear
                    this.createChart(); // Crear el gráfico con la data llena
                    this.cdRef.detectChanges();
                    console.log("Inicialización de Dashboard completa.");
                }, 50); 
                
            },
            error: (err) => {
                console.error('Error al cargar uno o más archivos CSV:', err);
            }
        });
    }
    
    private processCsvText(csvText: string): any[] {
        if (!csvText) return [];

        const lines = csvText.split(/\r\n|\n/).filter(line => line.trim() !== '');
        if (lines.length <= 1) return [];

        const headerLine = lines[0].trim();
        const headers = headerLine.split(',').map(header => header.trim().replace(/"/g, ''));
        const data: any[] = [];
        
        for (let i = 1; i < lines.length; i++) {
            const currentLine = lines[i].split(',');
            if (currentLine.length === headers.length) { 
                let row: any = {};
                for (let j = 0; j < headers.length; j++) {
                    const value = currentLine[j].trim().replace(/"/g, ''); 
                    const processedValue = isNaN(Number(value)) ? value : parseFloat(value); 
                    row[headers[j]] = processedValue;
                }
                data.push(row);
            }
        }
        return data;
    }

    private initializeData(): void {
        const economiesData = this.csvFiles.find(f => f.key === 'economies')?.data || [];
        if (economiesData.length > 0) {
            this.availableCountries = economiesData.map(e => ({
                iso3: e.ISO3, 
                name: e.ECONOMY_NAME
            })).sort((a, b) => a.name.localeCompare(b.name));
        }
    }

    // --- LÓGICA DE VISUALIZACIÓN ---
    private mapDataToChart(): void {
        if (!this.selectedCountryISO3) {
            return; 
        }

        const allData = this.csvFiles.find(f => f.key === 'data')?.data || [];

        // 🎯 Uso de la lista de Pilares fija
        const allPillarsStructure = [
            { NUM: 'IN.1', NAME: 'Institutions, ' },
            { NUM: 'IN.2', NAME: 'Human capital and research, ' },
            { NUM: 'IN.3', NAME: 'Infrastructure, ' },
            { NUM: 'IN.4', NAME: 'Market sophistication, ' },
            { NUM: 'IN.5', NAME: 'Business sophistication, ' },
            { NUM: 'OUT.6', NAME: 'Knowledge and technology outputs, ' },
            { NUM: 'OUT.7', NAME: 'Creative outputs, ' }
        ];

        const labels: string[] = [];
        const scores: number[] = [];
        this.rawPillarScores = []; // Limpiamos la tabla
        
        // console.log(`[DEBUG 7 PILARES] Pilares en la estructura (FORZADO a 7): ${allPillarsStructure.length}`);

        allPillarsStructure.forEach((pillarStructure: any) => {
            const pillarNum = pillarStructure.NUM;
            const pillarName = pillarStructure.NAME ? pillarStructure.NAME.split(',')[0].trim() : `Pilar ${pillarNum}`;
            
            const dataItem = allData.find((item: any) => 
                item.ISO3 === this.selectedCountryISO3 && item.NUM === pillarNum
            );
            
            let score = 0; 

            if (dataItem) {
                const rawScore = dataItem.SCORE;
                if (typeof rawScore === 'number' && !isNaN(rawScore)) {
                    score = rawScore;
                }
            }
            
            labels.push(pillarName);
            scores.push(score);
            this.rawPillarScores.push({
                name: pillarName,
                score: parseFloat(score.toFixed(2)),
                num: pillarNum
            });
            // console.log(`- ${pillarNum} (${pillarName}): ${score.toFixed(2)}`);
        });

        // 4. Actualizar la data interna (barChartData)
        this.updateChartData(labels, scores);
    }

    // 🎯 AJUSTE: Método que se llama al cambiar la selección en el dropdown
    onCountryChange(iso3: string): void {
        this.selectedCountryISO3 = iso3;
        
        // 1. Prepara la data (actualiza this.barChartData y this.rawPillarScores)
        this.mapDataToChart(); 
        
        // 2. Destruye el gráfico viejo y dibuja el nuevo con la data actualizada
        this.createChart(); 
        
        this.cdRef.detectChanges();
    }
}