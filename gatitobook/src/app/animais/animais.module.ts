import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { AnimaisListaComponent } from './animais-lista/animais-lista.component';


@NgModule({
  declarations: [AnimaisListaComponent],
  imports: [
    CommonModule,
    AnimaisRoutingModule
  ]
})
export class AnimaisModule { }
