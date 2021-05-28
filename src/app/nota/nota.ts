import { Materia } from './../materia/materia';
import { Avaliacao } from './../avaliacao/avaliacao';
import { Aluno } from './../aluno/aluno';
export class Nota {
  aluno!: Aluno;
  disciplina!: Materia;
  avaliacao!: Avaliacao;
  nota!: number;
}
