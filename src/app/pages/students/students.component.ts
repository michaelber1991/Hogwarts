import { Component, OnInit } from '@angular/core';
import { InputModel } from '@models/index';
import { StudentsService } from '@services/students.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  refreshTableTrigger: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  inputBasicReportTableComponent: InputModel<any> = new InputModel<any>();

  constructor(public studentsService:StudentsService) { }

  ngOnInit(): void {
    this.inputBasicReportTableComponent = new InputModel<any>([], this.refreshTableTrigger.asObservable());
    this.updateStudents()
  }

  updateStudents() {
    this.studentsService.getStudents().subscribe(students => {
      this.refreshTableTrigger.next(students);
    })
  }

}
