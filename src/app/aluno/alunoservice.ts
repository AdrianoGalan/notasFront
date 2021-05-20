import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, delay, take } from 'rxjs/operators';
import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoServiceService {



  private readonly API = "http://localhost:8080/WebServiceNotas/aluno"

constructor(private http: HttpClient) { }

list(){
  return this.http.get<Aluno[]>(this.API)
  .pipe(
    tap(console.log)
  );
}

}
