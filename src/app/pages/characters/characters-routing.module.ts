import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from '@pages/characters/characters.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent,
    children: [
      { path: 'requests', component: CharactersComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
