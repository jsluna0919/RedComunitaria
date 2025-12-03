import { Component } from '@angular/core';
import { dataset } from '../../shared/data/dataset.data';

@Component({
  selector: 'app-statistics',
  imports: [],
  templateUrl: './statistics.html',
  styleUrl: './statistics.css',
})
export class Statistics {

//   getChartData(selectedNum: string) {
//   // Filtramos los datos por el NUM seleccionado
//   const filtered = dataset.filter(d => d.NUM === selectedNum);

//     // Creamos los puntos para Highcharts
//     const data = filtered.map(d => ({
//       name: d.ECONOMY_NAME,
//       y: d.SCORE, // o VALUE_SCREEN si quieres usar ese
//       iso: d.ISO3
//     }));

//     return data.sort((a, b) => b.y - a.y); // ordenar de mayor a menor
//   }

//   chart: any;

// ngAfterViewInit(): void {
//   this.selectedLevel1 = this.tree[0].value; // valor por defecto
//   this.createChart();
// }

//   createChart() {
//     this.chart = Highcharts.chart('container', {
//       chart: { type: 'column' },
//       title: { text: `Indicador: ${this.selectedLevel1}` },
//       xAxis: {
//         type: 'category',
//       },
//       yAxis: {
//         title: { text: 'Score' }
//       },
//       series: [{
//         name: this.selectedLevel1,
//         type: 'column',
//         data: this.getChartData(this.selectedLevel1),
//         dataLabels: {
//           enabled: true,
//           inside: true,
//           style: { fontSize: '14px', fontWeight: 'bold', color: '#000' }
//         }
//       }]
//     });
//   }
}
