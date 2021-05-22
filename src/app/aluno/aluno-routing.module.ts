import { AlunoResolverGuard } from './guards/aluno-resolver.guard';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoListaComponent } from './aluno-lista/aluno-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: AlunoListaComponent },
  {
    path: 'novo', component: AlunoFormComponent,
    resolve: {
      aluno: AlunoResolverGuard
    }
  },
  { path: 'editar/:id', component: AlunoFormComponent,
  resolve: {
    aluno: AlunoResolverGuard
  } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoRoutingModule { }
