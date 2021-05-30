import { Component } from '@angular/core';
import { COL_DATA_TYPE } from './modules/table/models/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngvn-table';

  COL_DATA_TYPE = COL_DATA_TYPE;

  rows = [
    { id: 1, name: 'test 1', date: Date.now() },
    { id: 2, name: 'test 2', date: Date.now() },
    { id: 3, name: 'test 3', date: Date.now() },
    { id: 4, name: 'test 4', date: Date.now() },
    { id: 5, name: 'test 5', date: Date.now() },
  ]
}
