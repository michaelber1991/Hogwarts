import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';

export interface Columns {
  name: string;
  property: number;
}

@Component({
  selector: 'app-generic-grid',
  templateUrl: './generic-grid.component.html',
  styleUrls: ['./generic-grid.component.scss']
})
export class GenericGridComponent implements OnInit {

  @Input() refreshTrigger: Observable<any> = new Observable<any>();
  @ViewChild(MatPaginator) paginator: any;
  columns: Columns[] = [];
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>();

  private refreshTriggerSubscription: Subscription = new Subscription();

  constructor() { }

  ngOnInit(): void {
    this.refreshTriggerSubscription = this.refreshTrigger.subscribe(data => {
      if (data && data.length > 0) {
        this.displayedColumns = [];
        this.columns = [];
        this.displayedColumns = Object.keys(data[0]);
        this.columns = this.setHeaderColumns(data[0]);
        this.dataSource = new MatTableDataSource<any>(data);
        this.dataSource.paginator = this.paginator;
      }else {
        this.displayedColumns = [];
        this.columns = [];
        this.dataSource = new MatTableDataSource<any>([]);
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.refreshTriggerSubscription.unsubscribe();
  }

  private setHeaderColumns(sampleData: any): any[] {
    return Object.keys(sampleData).map(property => {
      return { name: property.charAt(0).toUpperCase() + property.slice(1), property }
    })
  }

}
