import { AlertModalComponent } from './../../shared/alert-modal/alert-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { catchError } from 'rxjs/operators';
import { AlunoServiceService } from './../alunoservice';
import { Aluno } from './../aluno';
import { Component, OnInit, ViewChild } from '@angular/core';
import { empty, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-aluno-lista',
  templateUrl: './aluno-lista.component.html',
  styleUrls: ['./aluno-lista.component.css'],
  preserveWhitespaces: true
})
export class AlunoListaComponent implements OnInit {

  alunos$!: Observable<Aluno[]>;
  bsModalRef!: BsModalRef;
  deletMoalRef!: BsModalRef;
  @ViewChild('deliteModel') deliteModel: any;

  alunoSelecionado!: Aluno;

  constructor(
    private service: AlunoServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService
  ) { }



  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.alunos$ = this.service.list().pipe(
      catchError(error => {
        this.handleError();
        return empty();
      }));
  }

  onEdit(aluno: any){

    this.router.navigate(['editar', aluno.ra], {relativeTo: this.route});
  }
  onMatricula(aluno: any){
    this.router.navigate(['matricular', aluno.ra], {relativeTo: this.route});
  }

  onDelete(aluno: Aluno){

    this.alunoSelecionado = aluno;
    this.deletMoalRef = this.modalService.show(this.deliteModel, {class: 'modal-sm'})



  }

  confirm(): void {

    this.service.remove(this.alunoSelecionado).subscribe(
      success => {

        this.onRefresh();
        this.deletMoalRef.hide();
      },
      error => {
        this.handleErrorDelite();
        this.deletMoalRef.hide();
      }
    )

  }

  decline(): void {
    this.deletMoalRef.hide();
  }

  handleError(){
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = 'Erro ao carregar';
  }
  handleErrorDelite(){
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = 'Erro ao deletar';
  }

}
