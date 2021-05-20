import { NotaListaComponent } from './nota/nota-lista/nota-lista.component';
import { MateriaListaComponent } from './materia/materia-lista/materia-lista.component';

import { AlunoFormComponent } from './aluno/aluno-form/aluno-form.component';
import { AlunoListaComponent } from './aluno/aluno-lista/aluno-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'aluno', component: AlunoListaComponent},
  {path: 'aluno/novo', component: AlunoFormComponent},
  {path: 'aluno/editar/:id', component: AlunoFormComponent},
  {path: 'materia', component: MateriaListaComponent},
  {path: 'nota', component: NotaListaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
