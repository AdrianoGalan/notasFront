import { AlertModalComponent } from './../../shared/alert-modal/alert-modal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { catchError } from 'rxjs/operators';
import { Observable, empty } from 'rxjs';
import { Aluno } from './../../aluno/aluno';
import { ActivatedRoute } from '@angular/router';
import { MateriaService } from './../materia.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Materia } from '../materia';

@Component({
  selector: 'app-materia-detalhe',
  templateUrl: './materia-detalhe.component.html',
  styleUrls: ['./materia-detalhe.component.css']
})
export class MateriaDetalheComponent implements OnInit {

  materiaForm!: FormGroup;
  alunos$!: Observable<Aluno[]>;
  materia!: Materia;
  bsModalRef!: BsModalRef;

  constructor(
    private FormBuilder: FormBuilder,
    private service: MateriaService,
    private route: ActivatedRoute,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {


    this.materia = this.route.snapshot.data['materia'];

    this.materiaForm = this.FormBuilder.group({



      matCodigo: [this.materia.codigo],
      matNome: [this.materia.nome],
      matTurma: [this.materia.turno]


    });

    this.onRefreshAlunos();
  }


  onRefreshAlunos() {
    this.alunos$ = this.service.getAlunoMatriculado(this.materia.codigo).pipe(
      catchError(error => {
        this.handleError();
        return empty();
      }));
  }

  handleError() {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = 'Erro ao carregar';
  }

}
