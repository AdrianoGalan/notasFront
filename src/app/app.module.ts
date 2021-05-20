import { NotaListaModule } from './nota/nota-lista/nota-lista.module';
import { NotaFormModule } from './nota/nota-form/nota-form.module';
import { MateriaListaModule } from './materia/materia-lista/materia-lista.module';
import { MateriaFormModule } from './materia/materia-form/materia-form.module';
import { AlunoListaModule } from './aluno/aluno-lista/aluno-lista.module';
import { AlunoFormModule } from './aluno/aluno-form/aluno-form.module';
import { AlunoListaComponent } from './aluno/aluno-lista/aluno-lista.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunoFormComponent } from './aluno/aluno-form/aluno-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlunoFormModule,
    AlunoListaModule,
    MateriaFormModule,
    MateriaListaModule,
    NotaFormModule,
    NotaListaModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
