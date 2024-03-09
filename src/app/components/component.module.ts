import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { TablaComponent } from './tabla/tabla.component';
import { PipePipe } from '../pipes/pipe.pipe';


@NgModule({
  declarations: [BarChartComponent, LineChartComponent, PieChartComponent, TablaComponent, PipePipe],
  imports: [CommonModule],
  exports: [BarChartComponent, LineChartComponent, PieChartComponent, TablaComponent]
})

export class ComponentModule { }
