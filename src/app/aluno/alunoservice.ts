import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, take } from 'rxjs/operators';
import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoServiceService {



  private readonly API = "http://localhost:8080/WebServiceNotas/aluno"


  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Aluno[]>(this.API)
      .pipe(
        take(1)
      );
  }

  add(aluno: Aluno) {

      return this.http.post(this.API, JSON.stringify(aluno), { headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'text' }).pipe(take(1));

  }

  getByRa(ra: Number){

    return this.http.get<Aluno>(`${this.API}/${ra}`)
    .pipe(
      tap(),
      take(1)
    );
  }

  remove(aluno: Aluno) {

    return this.http.delete(`${this.API}/${aluno.ra}`,  {responseType: 'text' }).pipe(take(1));
  }
}
