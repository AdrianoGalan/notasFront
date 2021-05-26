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

  constructor(
    private FormBuilder: FormBuilder,
    private service: MateriaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {


    const materia: Materia = this.route.snapshot.data['materia'];

    this.materiaForm = this.FormBuilder.group({



      matCodigo: [materia.codigo],
      matNome: [materia.nome],
      matTurma: [materia.turno]


    });
  }

}
