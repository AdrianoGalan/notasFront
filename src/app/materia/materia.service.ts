import { Nota } from './../nota/nota';
import { Matricula } from './../matricula/matricula';
import { Aluno } from './../aluno/aluno';
import { tap, take, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Materia } from './materia';



@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  private readonly API = "http://localhost:8080/WebServiceNotas/disciplina"


  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Materia[]>(this.API)
      .pipe(
        take(1),
        tap(console.log)
      );
  }

  getByCodigo(codigo: Number) {

    return this.http.get<Materia>(`${this.API}/${codigo}`)
    .pipe(
      tap(),
      take(1)
    );
  }

  getAlunoMatriculado(codigoMateria: Number) {

    return this.http.get<Aluno[]>(`${this.API}/${"aluno/"}${codigoMateria}`)
      .pipe(
        take(1),
        tap(console.log)
      );
  }

  getMateriasAluno(ra: Number) {

    return this.http.get<Aluno[]>(`${this.API}/${"list/"}${ra}`)
      .pipe(
        take(1),
        tap(console.log)
      );
  }


  add(matricula: Matricula) {

    return this.http.post(`${this.API}/${"add"}`, JSON.stringify(matricula), { headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'text' }).pipe(take(1));

  }





}
