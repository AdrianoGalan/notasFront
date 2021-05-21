import { take } from 'rxjs/operators';
import { AlunoServiceService } from './../alunoservice';
import { Aluno } from './../aluno';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-aluno-lista',
  templateUrl: './aluno-lista.component.html',
  styleUrls: ['./aluno-lista.component.css'],
  preserveWhitespaces: true
})
export class AlunoListaComponent implements OnInit {

  alunos$!: Observable<Aluno[]>;

  constructor(
    private service: AlunoServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }



  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.alunos$ = this.service.list().pipe(take(1));
  }

  onEdit(aluno: any){

    this.router.navigate(['editar', aluno.ra], {relativeTo: this.route});
  }

  onDelete(aluno: Aluno){

    this.service.remove(aluno).subscribe(
      success => {

        this.onRefresh();
      },
    )

  }

}
