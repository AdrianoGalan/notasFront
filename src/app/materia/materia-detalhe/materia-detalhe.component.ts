import { NotaService } from './../../nota/nota.service';
import { Avaliacao } from './../../avaliacao/avaliacao';
import { Nota } from './../../nota/nota';
import { AlertModalComponent } from './../../shared/alert-modal/alert-modal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { catchError } from 'rxjs/operators';
import { Observable, empty } from 'rxjs';
import { Aluno } from './../../aluno/aluno';
import { ActivatedRoute } from '@angular/router';
import { MateriaService } from './../materia.service';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Materia } from '../materia';
import { AlunoNota } from 'src/app/aluno/alunoNota';

@Component({
  selector: 'app-materia-detalhe',
  templateUrl: './materia-detalhe.component.html',
  styleUrls: ['./materia-detalhe.component.css']
})
export class MateriaDetalheComponent implements OnInit {

  materiaForm!: FormGroup;
  alunos$!: Observable<AlunoNota[]>;
  materia!: Materia;
  bsModalRef!: BsModalRef;


  notas$!: Observable<Nota[]>;
  materias$!: Observable<Materia[]>;


  constructor(
    private FormBuilder: FormBuilder,
    private serviceMateria: MateriaService,
    private serviceNota: NotaService,
    private route: ActivatedRoute,
    private location: Location,
    private modalService: BsModalService,
    private nota: Nota,
    private avaliacao: Avaliacao,

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
    this.alunos$ = this.serviceMateria.getAlunoComNotaMatriculado(this.materia.codigo).pipe(
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


    this.nota.aluno = aluno;
    this.nota.disciplina = this.materia


    if (this.materiaForm.get("p1")?.value) {
      this.salvarNota(1, "p1")
    }


    if (this.materiaForm.get("p2")?.value) {
      this.salvarNota(2, "p2")
    }


    if (this.materiaForm.get("p3")?.value) {
      this.salvarNota(3, "p3")
    }


    if (this.materiaForm.get("t")?.value) {
      this.salvarNota(4, "t")
    }


  }


  salvarNota(codigo: number, tipo: string) {

    this.avaliacao.codigo = codigo;
    this.avaliacao.tipo = tipo;
    this.nota.avaliacao = this.avaliacao;

    this.nota.nota = this.materiaForm.get(tipo)?.value;



    this.serviceNota.add(this.nota).subscribe(

      success => {

        console.log("ok")
      },
      erro =>{

        this.handleErrorNota();

      }

    );

  }

  onOk(){
    this.location.back();
  }

  handleErrorNota() {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = 'Nota deve ser entre 0 e 10';
  }


}
