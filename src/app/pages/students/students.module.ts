import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { ComponentsModule } from '@components/components.module';



@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    StudentsComponent
  ]
})
export class StudentsModule { }
