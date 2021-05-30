import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { ColumnDirective } from './directives/column.directive';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CellDirective } from './directives/cell.directive';
import { HeaderDirective } from './directives/header.directive';

@NgModule({
  declarations: [
    TableComponent,
    ColumnDirective,
    CellDirective,
    HeaderDirective
  ],
  exports: [
    TableComponent,
    ColumnDirective,
    CellDirective,
    HeaderDirective
  ],
  imports: [
    CommonModule,
    NzTableModule
  ]
})
export class TableModule { }
