import { MateriaListaComponent } from './materia-lista/materia-lista.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriaRoutingModule } from './materia-routing.module';
import { MateriaDetalheComponent } from './materia-detalhe/materia-detalhe.component';


@NgModule({
  declarations: [MateriaListaComponent, MateriaDetalheComponent],
  imports: [
    CommonModule,
    MateriaRoutingModule
  ]
})
export class MateriaModule { }
