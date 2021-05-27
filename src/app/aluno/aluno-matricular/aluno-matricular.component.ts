import { Matricula } from './../../matricula/matricula';
import { Aluno } from './../aluno';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertModalComponent } from './../../shared/alert-modal/alert-modal.component';
import { catchError, map, take } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { MateriaService } from './../../materia/materia.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Materia } from './../../materia/materia';
import { Observable, empty } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-aluno-matricular',
  templateUrl: './aluno-matricular.component.html',
  styleUrls: ['./aluno-matricular.component.css']
})
export class AlunoMatricularComponent implements OnInit {

  materias$!: Observable<Materia[]>;
  materiasAluno$!: Observable<Materia[]>;
  bsModalRef!: BsModalRef;
  deletMoalRef!: BsModalRef;
  formMatricular!: FormGroup;
  aluno!: Aluno;
  matricula!: Matricula;
  disciplina!: Materia;

  constructor(
    private formBuilder: FormBuilder,
    private service: MateriaService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {

    this.aluno = this.route.snapshot.data['aluno'];

    this.formMatricular = this.formBuilder.group({
      curso: [null, [Validators.required, Validators.minLength(3)]],
      ra: [this.aluno.ra, [Validators.required]],
      nome: [this.aluno.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });

    this.onRefresh();
    this.onRefreshMaterias();
  }

  onRefresh() {
    this.materias$ = this.service.list().pipe(
      catchError(error => {
        this.handleError();
        return empty();
      }));
  }

  onRefreshMaterias() {
    this.materiasAluno$ = this.service.getMateriasAluno(this.aluno.ra).pipe(
      catchError(error => {
        this.handleError();
        return empty();
      }));
  }

  onMatricular() {

    this.matricula = new Matricula();


    this.matricula.aluno = this.aluno;
    this.matricula.disciplina = this.formMatricular.get("curso")?.value;
    this.matricula.anoSemestre = 20212;

    this.service.add(this.matricula).subscribe(

      success => {

        this.onRefreshMaterias();
      },

    );

  }

  handleError() {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = 'Erro ao carregar';
  }

}
