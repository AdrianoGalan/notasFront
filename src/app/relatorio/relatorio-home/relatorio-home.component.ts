import { RelatorioData } from '../relatorioData';
import { RelatorioNota } from './../relatorioNota';
import { RelatorioService } from './../relatorio.service';
import { AlertModalComponent } from './../../shared/alert-modal/alert-modal.component';
import { catchError, tap } from 'rxjs/operators';
import { Observable, empty } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute } from '@angular/router';
import { MateriaService } from './../../materia/materia.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/materia/materia';
import { Aluno } from 'src/app/aluno/aluno';
import { RelatorioFalta } from '../relatorioFalta';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-relatorio-home',
  templateUrl: './relatorio-home.component.html',
  styleUrls: ['./relatorio-home.component.css']
})
export class RelatorioHomeComponent implements OnInit {

  materias$!: Observable<Materia[]>;
  bsModalRef!: BsModalRef;
  formDisciplina!: FormGroup;
  relatorio$!: Observable<RelatorioNota[]>;
  relatorioFalta$!: Observable<RelatorioFalta[]>;
  data$!: Observable<RelatorioData>;
  tNota: boolean = false;
  tFalta: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    private service: MateriaService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private serviceRelatorio: RelatorioService
  ) { }

  ngOnInit(): void {


    this.formDisciplina = this.formBuilder.group({
      curso: [null, [Validators.required, Validators.minLength(3)]],

    });

    this.onRefresh();

  }

  onRefresh() {
    this.materias$ = this.service.list().pipe(
      catchError(error => {
        this.handleError('Erro no banco de dados');
        return empty();
      }));
  }


  onRefreshData() {
    this.data$ = this.service.getData(this.formDisciplina.get("curso")?.value).pipe(
      catchError(error => {
        this.handleError('Erro no banco de dados');
        return empty();
      }));

  }

  onRefreshRelatorioFalta() {
    this.relatorioFalta$ = this.serviceRelatorio.getRelatorioFaltaByCodigo(this.formDisciplina.get("curso")?.value).pipe(
      catchError(error => {
        this.handleError('Erro no banco de dados');
        return empty();
      }));

  }

  onRefreshRelatorioNota() {
    this.relatorio$ = this.serviceRelatorio.getRelatorioNotaByCodigo(this.formDisciplina.get("curso")?.value).pipe(
      catchError(error => {
        this.handleError('Erro no banco de dados');
        return empty();
      }));
  }

  onNotas() {

    if (this.valida()) {

      this.tFalta = false;
      this.tNota = true;
      this.onRefreshRelatorioNota()
    }

  }

  onFaltas() {

    if (this.valida()) {

      this.tFalta = true;
      this.tNota = false;


      this.onRefreshData();
      this.onRefreshRelatorioFalta();

    }

  }

  valida() {


    if (this.formDisciplina.get("curso")?.value) {

      return true;

    } else {
      this.handleError('Selecione uma Disciplina');
      return false
    }
  }

  handleError(msg: string) {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = msg;
  }

}
