import { MateriaService } from './../materia.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Materia } from '../materia'


@Injectable({
  providedIn: 'root'
})
export class MateriaResolverGuard implements Resolve<Materia> {

  constructor(private service: MateriaService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Materia> {
    if (route.params.id) {

      return this.service.getByCodigo(route.params.id);

    }

    return of({
      codigo: null,
      nome: null,
      sigla: null,
      turno: null,
      numAulas: null
    });
  }


}
