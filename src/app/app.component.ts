import { Component, OnInit } from '@angular/core';
import { COL_DATA_TYPE, Dictionary, SortOrder } from './modules/table/models/types';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { delay, mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngvn-table';

  COL_DATA_TYPE = COL_DATA_TYPE;

  loading = false;

  page$ = new BehaviorSubject(1);
  pageSize$ = new BehaviorSubject(10);
  sort$ = new BehaviorSubject<{ key: string, order: SortOrder }>({ key: 'name', order: null });

  totalRows = 1_000;

  vm$!: Observable<{
    rows: Dictionary[],
    page: number;
    pageSize: number;
  }>;

  ngOnInit(): void {
    this.vm$ = combineLatest([
      this.page$,
      this.pageSize$,
      this.sort$
    ]).pipe(
      tap(() => this.loading = true),
      mergeMap(([page, pageSize, { key, order }]) => {
        return of({
          rows: [
            { id: 1, name: 'test 1', date: Date.now() },
            { id: 2, name: 'test 2', date: Date.now() },
            { id: 3, name: 'test 3', date: Date.now() },
            { id: 4, name: 'test 4', date: Date.now() },
            { id: 5, name: 'test 5', date: Date.now() },
          ].sort((a: any, b: any) => (a[key] < b[key]
            ? (order === 'ascend' ? 1 : -1)
            : (order === 'descend' ? -1 : 1)
          )),
          page,
          pageSize,
          sortKey: key,
          sortOrder: order
        })
      }),
      delay(200),
      tap(() => this.loading = false),
    )
  }
}
