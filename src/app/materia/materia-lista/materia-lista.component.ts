import { AlertModalComponent } from './../../shared/alert-modal/alert-modal.component';
import { MateriaService } from './../materia.service';
import { catchError } from 'rxjs/operators';
import { Observable, EMPTY, empty } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Materia } from './../materia';

@Component({
  selector: 'app-materia-lista',
  templateUrl: './materia-lista.component.html',
  styleUrls: ['./materia-lista.component.css']
})
export class MateriaListaComponent implements OnInit {

  materias$!: Observable<Materia[]>;
  bsModalRef!: BsModalRef;
  deletMoalRef!: BsModalRef;
  @ViewChild('deliteModel') deliteModel: any;

  materiaSelecionado!: Materia;

  constructor(
    private service: MateriaService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService
  ) { }



  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.materias$ = this.service.list().pipe(
      catchError(error => {
        this.handleError();
        return empty();
      }));
  }



  handleError(){
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = 'Erro ao carregar';
  }

  onClikTabela(materia: Materia){

    this.router.navigate(['detalhe', materia.codigo], {relativeTo: this.route});

  }

  onClikTabelaFaltas(materia: Materia){

    this.router.navigate(['faltas', materia.codigo], {relativeTo: this.route});

  }

}
