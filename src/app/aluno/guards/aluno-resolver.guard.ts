import { AlunoServiceService } from './../alunoservice';

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve  } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Aluno } from '../aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoResolverGuard implements Resolve<Aluno> {



  constructor(private service: AlunoServiceService){}



  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<Aluno> {
     if(route.params.id){


       return this.service.getByRa(route.params.id);

     }

    return of({
      ra: null,
      nome: null
    });
  }






}
