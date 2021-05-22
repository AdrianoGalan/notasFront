import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

    {
      path: '', pathMatch: 'full', redirectTo: 'aluno'
    },
    {
      path: 'aluno',
      loadChildren: () => import('./aluno/aluno.module').then(m => m.AlunoModule)
    },
    {
      path: 'home',
      loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'materia',
      loadChildren: () => import('./materia/materia.module').then(m => m.MateriaModule)
    },
    {
      path: 'nota',
      loadChildren: () => import('./nota/nota.module').then(m => m.NotaModule)
    },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
