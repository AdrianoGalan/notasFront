import { Nota } from './nota/nota';
import { AlunoListaModule } from './aluno/aluno-lista/aluno-lista.module';
import { AlunoFormModule } from './aluno/aluno-form/aluno-form.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { Avaliacao } from './avaliacao/avaliacao';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlunoFormModule,
    AlunoListaModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(),
    AvaliacaoModule
  ],
  providers: [Nota, Avaliacao],
  bootstrap: [AppComponent]
})
export class AppModule { }
