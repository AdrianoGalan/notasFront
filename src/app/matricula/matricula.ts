import { Materia } from './../materia/materia';
import { Aluno } from './../aluno/aluno';
export class Matricula {
    aluno!: Aluno;
    disciplina!: Materia;
    anoSemestre!: number;
}
