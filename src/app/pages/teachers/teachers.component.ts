import { Component, OnInit } from '@angular/core';
import { InputModel } from '@models/index';
import { TeachersService } from '@services/teachers.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  refreshTableTrigger: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  inputBasicReportTableComponent: InputModel<any> = new InputModel<any>();

  constructor(public teachersService:TeachersService) { }

  ngOnInit(): void {
    this.inputBasicReportTableComponent = new InputModel<any>([], this.refreshTableTrigger.asObservable());
    this.updateStudents()
  }

  updateStudents() {
    this.teachersService.getStudents().subscribe(teachers => {
      this.refreshTableTrigger.next(teachers);
    })
  }
}
