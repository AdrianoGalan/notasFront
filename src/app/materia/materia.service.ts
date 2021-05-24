import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
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
        tap(console.log)
      );
  }


}
