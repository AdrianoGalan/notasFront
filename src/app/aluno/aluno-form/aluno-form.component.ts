import { ApplicationRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  aluno!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.aluno =this.formBuilder.group({

      ra: [null],
      nome:[null]


    });
  }

  ngSubmit(){

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

      this.http.post('http://localhost:8080/WebServiceNotas/aluno', JSON.stringify(this.aluno.value), { headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'text'}).subscribe(dados =>{
        console.log(dados);
        this.aluno.reset();
      })
  }

}
