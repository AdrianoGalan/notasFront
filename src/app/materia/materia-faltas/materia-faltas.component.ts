import { AlunoFalta } from './../../aluno/alunoFalta';
import { AlertModalComponent } from './../../shared/alert-modal/alert-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { catchError } from 'rxjs/operators';
import { MateriaService } from './../materia.service';
import { Observable, empty } from 'rxjs';
import { Aluno } from './../../aluno/aluno';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Materia } from '../materia';
import { Location } from '@angular/common';
import { Aula } from 'src/app/aula/aula';
import { Falta } from 'src/app/falta/falta';

@Component({
  selector: 'app-materia-faltas',
  templateUrl: './materia-faltas.component.html',
  styleUrls: ['./materia-faltas.component.css']
})
export class MateriaFaltasComponent implements OnInit {

  materiaForm!: FormGroup;
  materia!: Materia;
  alunos$!: Observable<AlunoFalta[]>;
  bsModalRef!: BsModalRef;
  aulas$!: Observable<Aula[]>
  aula!: Aula;

  constructor(
    private FormBuilder: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private serviceMateria: MateriaService,
    private modalService: BsModalService,
    private falta: Falta

  ) { }

  ngOnInit(): void {

    this.materia = this.route.snapshot.data['materia'];
    this.materiaForm = this.FormBuilder.group({



      matCodigo: [this.materia.codigo],
      matNome: [this.materia.nome],
      matTurma: [this.materia.turno],
      falt: null,
      data: null

    }
    );


    this.onRefreshAulas()



  }

  onRefreshAlunos() {

    this.aula = this.materiaForm.get("data")?.value
    this.alunos$ = this.serviceMateria.getAlunosFaltaByData(this.materia.codigo, this.aula.data ).pipe(
      catchError(error => {
        this.handleError('Erro ao carregar');
        return empty();
      }));
  }

  onRefreshAulas() {

    this.aulas$ = this.serviceMateria.getDataAulasByMAtaria(this.materia.codigo).pipe(
      catchError(error => {
        this.handleError('Erro ao carregar');
        return empty();
      }));

  }

  onSalvar(aluno: Aluno) {


    if (this.materiaForm.get("data")?.value) {
      if (this.materiaForm.get("falt")?.value > 0 && this.materiaForm.get("falt")?.value < 5) {

        const alu: Aluno = aluno




        this.aula = this.materiaForm.get("data")?.value

        this.falta.aluno = alu;
        this.falta.aula = this.aula;
        this.falta.falta = this.materiaForm.get("falt")?.value;

        this.serviceMateria.addFalta(this.falta).subscribe(

          success => {

          
            this.materiaForm.get("falt")?.setValue(null)
            this.onRefreshAlunos();
          },

        );


      } else {
        this.handleError('numero de faltas deve ser entre 1 e 4');
      }
    } else {
      this.handleError('escolha uma data');
    }

  }

  onOk() {
    this.location.back();
  }

  handleError(msg: string) {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = msg;
  }
}
