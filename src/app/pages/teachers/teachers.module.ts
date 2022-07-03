import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers.component';
import { ComponentsModule } from '@components/components.module';



@NgModule({
  declarations: [
    TeachersComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    TeachersComponent
  ]
})
export class TeachersModule { }
