import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  form: FormGroup = this.formBuilder.group({
    name: [null, []]
  });

  constructor(public teachersService:TeachersService,     private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.inputBasicReportTableComponent = new InputModel<any>([], this.refreshTableTrigger.asObservable());
    this.updateStudents()
  }

  updateStudents() {
    this.teachersService.getStudents().subscribe(teachers => {
      if (this.form.get('name')?.value == null || this.form.get('name')?.value == '' ){
        this.refreshTableTrigger.next(teachers);
      } else {
        teachers = teachers.filter(teacher => teacher.name.toLocaleLowerCase().includes(this.form.get('name')?.value.toLocaleLowerCase()));
        this.refreshTableTrigger.next(teachers);
      }
    })
  }
}
