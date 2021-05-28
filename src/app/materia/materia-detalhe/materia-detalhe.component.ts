import { Avaliacao } from './../../avaliacao/avaliacao';
import { Nota } from './../../nota/nota';
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
  nota!: Nota;
  avaliacao!: Avaliacao;

  constructor(
    private FormBuilder: FormBuilder,
    private serviceMateria: MateriaService,
    //private serviceNota: NotaService,
    private route: ActivatedRoute,
    private modalService: BsModalService,

  ) { }

  ngOnInit(): void {


    this.materia = this.route.snapshot.data['materia'];

    this.materiaForm = this.FormBuilder.group({



      matCodigo: [this.materia.codigo],
      matNome: [this.materia.nome],
      matTurma: [this.materia.turno],
      p1: null,
      p2: null,
      p3: null,
      t: null


    });

    this.onRefreshAlunos();
  }


  onRefreshAlunos() {
    this.alunos$ = this.serviceMateria.getAlunoMatriculado(this.materia.codigo).pipe(
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

  onSalvar(aluno: Aluno) {

    this.nota = new Nota();
    this.avaliacao = new Avaliacao();
    this.nota.aluno = aluno

    if (this.materiaForm.get("p1")) {
      this.avaliacao.codigo = 1;
      this.avaliacao.tipo = "P1";
      this.nota.avaliacao = this.avaliacao

      this.nota.nota = this.materiaForm.get("p1")?.value

    }

   // this.serviceNota.


    console.log(this.nota)

  }

}
