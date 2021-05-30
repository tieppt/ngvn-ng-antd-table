import { ContentChild, Directive, Input } from '@angular/core';
import { CellDirective } from './cell.directive';
import { HeaderDirective } from './header.directive';
import { COL_DATA_TYPE } from '../models/types';

@Directive({
  selector: 'ngvn-column',
})
export class ColumnDirective {
  @Input() header = '';
  @Input() key = '';
  @Input() renderKey = '';
  @Input() dataType = COL_DATA_TYPE.TEXT;

  @ContentChild(CellDirective, { static: true }) tplCell?: CellDirective;
  @ContentChild(HeaderDirective, { static: true }) tplHeader?: HeaderDirective;

  constructor() { }
}
