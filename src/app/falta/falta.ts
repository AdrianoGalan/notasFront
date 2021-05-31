import { Aluno } from "../aluno/aluno";
import { Aula } from "../aula/aula";

export class Falta {
  aluno!: Aluno;
  aula!:  Aula;
  falta!: number;
}
