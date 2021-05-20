import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoFormComponent } from './aluno-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  declarations: [AlunoFormComponent]
})
export class AlunoFormModule { }
