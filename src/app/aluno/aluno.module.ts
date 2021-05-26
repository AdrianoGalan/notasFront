import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing.module';
import { AlunoMatricularComponent } from './aluno-matricular/aluno-matricular.component';


@NgModule({
  declarations: [AlunoMatricularComponent],
  imports: [
    CommonModule,
    AlunoRoutingModule,
    ReactiveFormsModule

  ]
})
export class AlunoModule { }
