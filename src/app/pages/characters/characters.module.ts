import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { ComponentsModule } from '@components/components.module';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CharactersRoutingModule } from './characters-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MatSelectModule,
    FormsModule,
    CharactersRoutingModule,
    RouterModule
  ],
  exports: [
    CharactersComponent
  ]
})
export class CharactersModule { }
