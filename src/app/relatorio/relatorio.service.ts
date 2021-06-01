import { tap, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RelatorioNota } from './relatorioNota';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

  private readonly API = "http://localhost:8080/WebServiceNotas/relatorio"


  constructor(private http: HttpClient) { }

  getRelatorioNotaByCodigo(codigo: Number) {

    return this.http.get<RelatorioNota[]>(`${this.API}/${codigo}`)
      .pipe(
        tap(),
        take(1)
      );
  }
}
