import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimaisListaComponent } from './animais-lista/animais-lista.component';

const routes: Routes = [
  {
    path: '',
    component: AnimaisListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimaisRoutingModule { }
