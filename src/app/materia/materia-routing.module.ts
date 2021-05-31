import { MateriaFaltasComponent } from './materia-faltas/materia-faltas.component';
import { MateriaResolverGuard } from './guards/materia-resolver.guard';
import { MateriaDetalheComponent } from './materia-detalhe/materia-detalhe.component';
import { MateriaListaComponent } from './materia-lista/materia-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: MateriaListaComponent},
  {
    path: 'detalhe/:id', component: MateriaDetalheComponent,
    resolve: {
      materia: MateriaResolverGuard
    }
  },
  {
    path: 'faltas/:id', component: MateriaFaltasComponent,
    resolve: {
      materia: MateriaResolverGuard
    }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MateriaRoutingModule { }
