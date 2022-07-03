import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { ComponentsModule } from '@components/components.module';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MatSelectModule,
    FormsModule
  ],
  exports: [
    CharactersComponent
  ]
})
export class CharactersModule { }
