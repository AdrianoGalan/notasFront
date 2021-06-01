import { AlertModalComponent } from './../../shared/alert-modal/alert-modal.component';
import { catchError } from 'rxjs/operators';
import { Observable, empty } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute } from '@angular/router';
import { MateriaService } from './../../materia/materia.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/materia/materia';

@Component({
  selector: 'app-relatorio-home',
  templateUrl: './relatorio-home.component.html',
  styleUrls: ['./relatorio-home.component.css']
})
export class RelatorioHomeComponent implements OnInit {

  materias$!: Observable<Materia[]>;
  bsModalRef!: BsModalRef;
  formDisciplina!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: MateriaService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService
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

  onNotas() {

    if (this.valida()) {

      console.log('foi')
    }

  }

  onFaltas() {

    if (this.valida()) {

      console.log('foi')
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
