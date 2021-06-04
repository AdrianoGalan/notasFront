import { AlunoFalta } from './../aluno/alunoFalta';
import { Matricula } from './../matricula/matricula';
import { Aluno } from './../aluno/aluno';
import { tap, take, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Materia } from './materia';
import { AlunoNota } from '../aluno/alunoNota';
import { Falta } from '../falta/falta';
import { RelatorioData } from '../relatorio/relatorioData';



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
        tap()
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
        tap()
      );
  }

  getAlunoComNotaMatriculado(codigoMateria: Number) {

    return this.http.get<AlunoNota[]>(`${this.API}/${"aluno/nota/"}${codigoMateria}`)
      .pipe(
        take(1),
        tap()
      );
  }

  getMateriasAluno(ra: Number) {

    return this.http.get<Aluno[]>(`${this.API}/${"list/"}${ra}`)
      .pipe(
        take(1),
        tap(console.log)
      );
  }

  getDataAulasByMAtaria(codigo: Number) {

    return this.http.get<Aluno[]>(`${this.API}/${"aula/falta/"}${codigo}`)
      .pipe(
        take(1),
        tap(console.log)
      );
  }

  getAlunosFaltaByData(codigo: Number, data: string) {

    return this.http.get<AlunoFalta[]>(`${this.API}/${"aluno/falta/"}${codigo}/${data}`)
      .pipe(
        take(1),
        tap()
      );
  }

  getData(codigo: Number) {

    return this.http.get<RelatorioData>(`${this.API}/${"aula/data/"}${codigo}`).pipe(
      take(1),
      tap()
    );
  }

  add(matricula: Matricula) {

    return this.http.post(`${this.API}/${"add"}`, JSON.stringify(matricula), { headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'text' }).pipe(take(1));

  }

  addFalta(falta: Falta) {

    return this.http.post(`${this.API}/${"add/falta"}`, JSON.stringify(falta), { headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'text' }).pipe(take(1));

  }



}
