import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { ComponentsModule } from '@components/components.module';
import {MatButtonModule} from '@angular/material/button';
import { RequestsComponent } from './requests/requests.component';
import { RouterModule } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import { RequestformComponent } from './requestform/requestform.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    StudentsComponent,
    RequestsComponent,
    RequestformComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MatButtonModule,
    RouterModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [
    StudentsComponent,
    RequestsComponent,
    RequestformComponent
  ]
})
export class StudentsModule { }
