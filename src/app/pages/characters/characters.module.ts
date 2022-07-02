import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { ComponentsModule } from '@components/components.module';



@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    CharactersComponent
  ]
})
export class CharactersModule { }
