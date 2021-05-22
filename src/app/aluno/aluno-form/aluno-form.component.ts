import { ActivatedRoute } from '@angular/router';
import { AlunoServiceService } from './../alunoservice';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  aluno!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: AlunoServiceService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {


    const aluno: Aluno = this.route.snapshot.data['aluno'];



    this.aluno = this.formBuilder.group({



      ra: [aluno.ra],
      nome: [aluno.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]


    });
  }

  ngSubmit() {



    this.service.add(this.aluno.value).subscribe(

      success => {

        this.location.back();
      },

    );
  }

}
