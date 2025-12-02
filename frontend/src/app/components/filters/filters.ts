import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IndicatorNode } from '../../shared/models/indicadorNode.model';
import { dataset } from '../../shared/data/dataset.data';
import { indicatorTree } from '../../shared/data/indicatorTree.data';
@Component({
  selector: 'app-filters',
  imports: [CommonModule,FormsModule],
  templateUrl: './filters.html',
  styleUrl: './filters.css',
})


export class Filters {


  tree: IndicatorNode[] = [];
  level2Options: IndicatorNode[] = [];
  level3Options: IndicatorNode[] = [];

  selectedLevel1 = '';
  selectedLevel2 = '';
  selectedNum = '';

  ngAfterViewInit() {
    // this.tree = buildTree(dataset);
    this.tree = indicatorTree;
    if (this.tree.length) {
      this.selectedLevel1 = this.tree[0].value;
      this.onLevel1Change();
    }
  }

  onLevel1Change() {
    const lvl1 = this.tree.find(t => t.value === this.selectedLevel1);
    this.level2Options = lvl1?.children || [];
    if (this.level2Options.length) {
      this.selectedLevel2 = this.level2Options[0].value;
      this.onLevel2Change();
    }
  }

  onLevel2Change() {
    const lvl2 = this.level2Options.find(l => l.value === this.selectedLevel2);
    this.level3Options = lvl2?.children || [];
    if (this.level3Options.length) {
      this.selectedNum = this.level3Options[0].value;
      this.onNumChange();
    }
  }

  onNumChange() {
    // aquí generas el gráfico según this.selectedNum
    this.generateChart(this.selectedNum);
  }

  generateChart(num: string) {
    console.log('Generando gráfico para', num);
    // Aquí iría tu lógica de Highcharts después
  }
}
