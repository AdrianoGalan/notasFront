import { Avaliacao } from './../avaliacao/avaliacao';
import { Materia } from './../materia/materia';
import { Aluno } from './../aluno/aluno';
export class Nota {
  aluno!: Aluno;
  discuplina!: Materia;
  avaliacao!: Avaliacao;
  nota!: number;
}
