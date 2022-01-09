import { Component, OnInit } from '@angular/core';
import { Professor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {

  constructor() { }

  professorSelecionado: Professor; 

  titulo = 'Professores';

  professores = [
    { id: 1, nome: 'Emanuel' , disciplina: 'Matematica' },
    { id: 2, nome: 'Claudia' , disciplina: 'Física' },
    { id: 3, nome: 'Maria'   , disciplina: 'Português' },
    { id: 4, nome: 'Eduardo' , disciplina: 'Inglês' },
    { id: 5, nome: 'Rodolfo' , disciplina: 'Programação' }
  ];

  professorSelected(professor: Professor){
    this.professorSelecionado = professor;
  }

  voltar(){
    this.professorSelecionado = null;
  }

  ngOnInit() {
  }

}
