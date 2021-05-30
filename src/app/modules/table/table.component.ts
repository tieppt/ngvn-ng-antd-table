import { Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { COL_DATA_TYPE, Dictionary } from './models/types';
import { ColumnDirective } from './directives/column.directive';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() rows: Dictionary[] = [];
  @Input() page = 1
  @Input() pageSize = 10;
  @Input() totalRows = 0;

  @ContentChildren(ColumnDirective) columns!: QueryList<ColumnDirective>;

  COL_DATA_TYPE = COL_DATA_TYPE;

  constructor() { }

  ngOnInit(): void {

  }

}
