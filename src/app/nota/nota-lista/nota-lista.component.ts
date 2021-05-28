import { catchError } from 'rxjs/operators';
import { NotaService } from './../nota.service';
import { Nota } from './../nota';
import { Observable, empty } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nota-lista',
  templateUrl: './nota-lista.component.html',
  styleUrls: ['./nota-lista.component.css']
})
export class NotaListaComponent implements OnInit {

  notas!: Observable<Nota[]>;

  constructor(private serviceNota: NotaService) { }

  ngOnInit() {

    this.notas = this.serviceNota.list().pipe(
      catchError(error => {

        return empty();
      }
      ));
  }


}
