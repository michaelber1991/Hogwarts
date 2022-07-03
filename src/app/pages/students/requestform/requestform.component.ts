import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-requestform',
  templateUrl: './requestform.component.html',
  styleUrls: ['./requestform.component.scss']
})
export class RequestformComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    title: [null, [Validators.required]],
    message: [null, Validators.required]
  });

  constructor(
    public dialogRef: MatDialogRef<RequestformComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
      return;
    }
  }


}
