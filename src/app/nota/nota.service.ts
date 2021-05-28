import { tap, take } from 'rxjs/operators';
import { Nota } from './nota';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  private readonly API = "http://localhost:8080/WebServiceNotas/nota"


  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Nota[]>(this.API)
      .pipe(
        take(1)
      );
  }



  // getAlunoMatriculado(codigoMateria: Number) {

  //   return this.http.get<Aluno[]>(`${this.API}/${"aluno/"}${codigoMateria}`)
  //     .pipe(
  //       tap(console.log)
  //     );
  // }



  add(nota: Nota) {

    return this.http.post(`${this.API}/${"add"}`, JSON.stringify(nota), { headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'text' }).pipe(take(1));

  }
}
