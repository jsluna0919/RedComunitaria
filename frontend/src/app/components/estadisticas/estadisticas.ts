import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as Highcharts from 'highcharts';
import { SeriesColumnOptions } from 'highcharts';
import { HighchartsChartComponent, ChartConstructorType } from 'highcharts-angular';
import { indicatorTree } from '../../shared/data/indicatorTree.data';
import { IndicatorNode } from '../../shared/models/indicadorNode.model';
import { dataset } from '../../shared/data/dataset.data';
import { dataset2 } from '../../shared/data/dataset.data';
import { dataset3 } from '../../shared/data/dataset.data';
@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './estadisticas.html',
  styleUrl: './estadisticas.css',
})
export class Estadisticas implements AfterViewInit {

    tree: IndicatorNode[] = [];
    level2Options: IndicatorNode[] = [];
    level3Options: IndicatorNode[] = [];
  

    selectedLevel1 = '';
    selectedLevel2 = '';
    selectedLevel3 = '';
 
    ngOnInit() {
      // Inicializamos el árbol
      this.tree = indicatorTree;

      if (this.tree.length) {
        this.selectedLevel1 = this.tree[0].value;
        this.level2Options = this.tree[0].children || [];

        if (this.level2Options.length) {
          this.selectedLevel2 = this.level2Options[0].value;
          this.level3Options = this.level2Options[0].children || [];

          if (this.level3Options.length) {
            this.selectedLevel3 = this.level3Options[0].value;
          }
        }
      }
    }
    
    ngAfterViewInit() {

      // if (this.tree.length) {
      //   setTimeout(() => {
      //     this.selectedLevel1 = this.tree[0].value;
      //     this.onLevel1Change();
      //   });
      // }
      this.createCharts();
    }

    onLevel1Change() {
      const lvl1 = this.tree.find(t => t.value === this.selectedLevel1);
      this.level2Options = lvl1?.children || [];
      if (this.level2Options.length) {
        this.selectedLevel2 = this.level2Options[0].value;
        this.onLevel2Change();
      }

      if (!this.chart2) return;
      const newData = this.getChartData(this.selectedLevel1);
      this.chart2.update({
        title: { text: `Indicador: ${this.selectedLevel1}` },
        series: [{ name: this.selectedLevel1, type: 'column', data: newData }]
      });
    }
  
    onLevel2Change() {
      const lvl2 = this.level2Options.find(l => l.value === this.selectedLevel2);
      this.level3Options = lvl2?.children || [];
      if (this.level3Options.length) {
        this.selectedLevel3 = this.level3Options[0].value;
        this.onLevel3Change();
      }
      const newData = this.getChartData2(this.selectedLevel2);
      this.chart3.update({
        title: { text: `Indicador: ${this.selectedLevel2}` },
        series: [{ name: this.selectedLevel2, type: 'column', data: newData }]
      });
    }
  
    onLevel3Change() {
      
      // this.level3Options = lvl3?.children || [];
      // if (this.level3Options.length) {
      //   this.selectedLevel3 = this.level3Options[0].value;
      // }
      const newData = this.getChartData3(this.selectedLevel3);
      this.chart4.update({
        title: { text: `Indicador: ${this.selectedLevel3}` },
        series: [{ name: this.selectedLevel3, type: 'column', data: newData }]
      });
      // aquí generas el gráfico según this.selectedLevel3
      this.generateChart(this.selectedLevel3);
      console.log(this.selectedLevel3);
      // console.log("Filtrado:", this.data.filter((d: any) => d.NUM === this.selectedLevel3));
      console.log("Coincidencias dataset3:", dataset3.filter(d => d.NUM === this.selectedLevel3));
    }
  
    generateChart(num: string) {
      console.log('Generando gráfico para', num);
      // Aquí iría tu lógica de Highcharts después
    }
  chart1: any;
  chart2: any;
  chart3: any;
  chart4: any;
  // Opciones del select (tu árbol de indicadores)




  createCharts() {
    // Primer gráfico: datos estáticos (ejemplo con medallas)
    // this.chart1 = Highcharts.chart('chart1', {
    //   chart: { type: 'column' },
    //   title: { text: 'Summer Olympics 2024 - Top 5 countries by Gold medals' },
    //   xAxis: { type: 'category' },
    //   series: [{
    //     name: '2024',
    //     type: 'column',
    //     data: this.getOlympicsData(2024),
    //     dataLabels: { enabled: true }
    //   }]
    // });

    // Segundo gráfico: datos dinámicos de dataset según select
    this.chart2 = Highcharts.chart('chart2', {
      chart: { type: 'column' },
      title: { text: `Indicador: ${this.selectedLevel1}` },
      xAxis: { type: 'category' },
      yAxis: { title: { text: 'Rank' } },
      series: [{
        name: this.selectedLevel1,
        type: 'column',
        data: this.getChartData(this.selectedLevel1),
        dataLabels: {
          enabled: true,
          inside: true,
          style: { fontSize: '14px', fontWeight: 'bold', color: '#000' }
        }
      }]
    });
    this.chart3 = Highcharts.chart('chart3', {
      chart: { type: 'column' },
      title: { text: `Indicador: ${this.selectedLevel2}` },
      xAxis: { type: 'category' },
      yAxis: { title: { text: 'Rank' } },
      series: [{
        name: this.selectedLevel2,
        type: 'column',
        data: this.getChartData2(this.selectedLevel2),
        dataLabels: {
          enabled: true,
          inside: true,
          style: { fontSize: '14px', fontWeight: 'bold', color: '#000' }
        }
      }]
    });
    this.chart4 = Highcharts.chart('chart4', {
      chart: { type: 'column' },
      title: { text: `Indicador: ${this.selectedLevel3}` },
      xAxis: { type: 'category' },
      yAxis: { title: { text: 'Rank' } },
      series: [{
        name: this.selectedLevel3,
        type: 'column',
        data: this.getChartData3(this.selectedLevel3),
        dataLabels: {
          enabled: true,
          inside: true,
          style: { fontSize: '14px', fontWeight: 'bold', color: '#000' }
        }
      }]
    });
  }
  getChartData(num: any) {
    console.log(dataset[0].ISO3);
    const filtered = dataset.filter(d => d.NUM === num);
    return filtered.map(d => ({
      name: d.ECONOMY_NAME,
      y: d.RANK,
      iso: d.ISO3
    })).sort((a, b) => b.y - a.y);
  }
  getChartData2(num: any) {
    console.log(dataset2[0].ISO3);
    const filtered = dataset2.filter(d => d.NUM === num);
    return filtered.map(d => ({
      name: d.ECONOMY_NAME,
      y: d.RANK,
      iso: d.ISO3
    })).sort((a, b) => b.y - a.y);
  }
  getChartData3(num: any) {
    console.log(dataset3[0].ISO3);
    const filtered = dataset3.filter(d => d.NUM === num);
    return filtered.map(d => ({
      name: d.ECONOMY_NAME,
      y: d.RANK,
      iso: d.ISO3
    })).sort((a, b) => b.y - a.y);
  }
  // getOlympicsData(year: number) {
  //   const data:any = { 
  //     2024: [['us', 40], ['cn', 40], ['jp', 20], ['gb', 37]],
  //     2020: [['us', 39], ['cn', 38], ['jp', 27], ['gb', 15]],
  //     2016: [['us', 46], ['gb', 27], ['cn', 26], ['jp', 27]],
  //     2012: [['us', 46], ['cn', 38], ['gb', 29], ['jp', 40]],
  //     2008: [['us', 36], ['cn', 51], ['gb', 19], ['jp', 38]]
  //   };
  //   const countries: any = {
  //     us: { name: 'United States', color: '#D568FB' },
  //     cn: { name: 'China', color: '#1C74BD' },
  //     jp: { name: 'Japan', color: '#544FC5' },
  //     gb: { name: 'Great Britain', color: '#00A6A6' }
  //   };
  //   return data[year].map(([code, val]:any) => ({ name: countries[code].name, y: val, color: countries[code].color }));
  // }
}
  // Al cambiar el select, solo actualizamos el segundo gráfico



  // ngAfterViewInit(): void {
  //   // Toda tu función JS puede ir aquí
  //   const data = { 
  //     2024: [['us', 40], ['cn', 40], ['jp', 20],['gb', 37]],
  //     2020: [['us', 39], ['cn', 38], ['jp', 27],['gb', 15]],
  //     2016: [['us', 46], ['gb', 27], ['cn', 26], ['jp', 27]],
  //     2012: [['us', 46], ['cn', 38], ['gb', 29], ['jp', 40]],
  //     2008: [['us', 36], ['cn', 51], ['gb', 19], ['jp', 38]]
  //     // ... agrega los demás años
  //   };

  //   const countries: any = {
  //     us: { name: 'United States', color: '#D568FB', ucCode: 'US' },
  //     cn: { name: 'China', color: '#1C74BD', ucCode: 'CN' },
  //     jp: { name: 'Japan', color: '#544FC5', ucCode: 'JP' },
  //     gb: { name: 'Great Britain', color: '#00A6A6', ucCode: 'GB' }
  //     // ... agrega los demás
  //   };

  //   const getData = (data: any[]) => data.map(point => ({
  //     name: point[0],
  //     y: point[1],
  //     color: countries[point[0]].color
  //   }))
  //   .sort((a, b) => b.y - a.y)
  //   ;

  //   const locations = [
  //     { city: 'Paris', year: 2024 },
  //     { city: 'Tokyo', year: 2020 },
  //     { city: 'Rio de Janeiro', year: 2016 },
  //     { city: 'London', year: 2012 },
  //     { city: 'Beijing', year: 2008 }
  //     // ... agrega los demás
  //   ];

  //   function generateChart(countries: any, data: any, getData: any, locations: any) {
  //     const chart = Highcharts.chart('container', {
  //       chart: { type: 'column' },
  //       title: { text: 'Summer Olympics 2024 - Top 5 countries by Gold medals' },
  //       xAxis: {
  //         type: 'category', // para usar los nombres de los puntos
  //         max: 3,
  //         labels: {
  //           formatter: function () {
  //             return countries[this.value].ucCode; // o countries[this.value].name si quieres el nombre completo
  //           }
  //         }
  //       },
  //       series: [{
  //         name: '2024',
  //         type: 'column',
  //         data: getData(data[2024]),
  //         dataLabels: {
  //           enabled: true,        // Activa los dataLabels
  //           inside: true,         // Que aparezcan dentro de la columna
  //           style: {
  //             fontSize: '14px',
  //             fontWeight: 'bold',
  //             color: '#000'
  //           }
  //         }
  //       }]
  //     });

  //     locations.forEach((location: any) => {
  //       const btn = document.getElementById(location.year.toString());
  //       if (btn) {
  //         btn.addEventListener('click', () => {
  //           document.querySelectorAll('.buttons button.active')
  //             .forEach(active => active.className = '');
  //           btn.className = 'active';

  //           chart.update({
  //             title: { text: `Summer Olympics ${location.year} - Top 5 countries by Gold medals` },
  //             series: [{
  //               name: location.year.toString(),
  //               type: 'column',
  //               data: getData(data[location.year])
  //             }]
  //           });
  //         });
  //       }
  //     });
  //   }

  //   generateChart(countries, data, getData, locations);
  // }


  

