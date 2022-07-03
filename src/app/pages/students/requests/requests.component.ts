import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InputModel } from '@models/index';
import { BehaviorSubject } from 'rxjs';
import { RequestformComponent } from '../requestform/requestform.component';

interface RequestData {
  identification: string;
  message: string | null;
}

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  refreshTableTrigger: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  inputBasicReportTableComponent: InputModel<any> = new InputModel<any>();

  //#region Initialize
  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.inputBasicReportTableComponent = new InputModel<any>([], this.refreshTableTrigger.asObservable());
    this.updateStudents()
  }
  //#endregion Initialize

  openDialog(): void {
    const dialogRef = this.dialog.open(RequestformComponent, {
      width: '250px',
      data: { name: '', animal: '' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        localStorage.setItem(result.identification, result.message);
        this.updateStudents();
      }
    });
  }
  
  //#region Private Methods 
  private updateStudents() {
    this.refreshTableTrigger.next(this.retrieveLocalStorage(Object.keys(localStorage)));
  }

  private retrieveLocalStorage(keys: string[]): RequestData[] {
    let localStorageData: RequestData[] = [];
    keys.forEach(key => {
      localStorageData.push({ identification: key, message: localStorage.getItem(key) })
    });
    return localStorageData;
  }
   //#endregion Private Methods 
}
