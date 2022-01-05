import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {

  constructor() { }

  titulo = 'Professores';

  professores = [
    { id: 1, nome: 'Emanuel' , disciplina: 'Matematica' },
    { id: 2, nome: 'Claudia' , disciplina: 'Física' },
    { id: 3, nome: 'Maria'   , disciplina: 'Português' },
    { id: 4, nome: 'Eduardo' , disciplina: 'Inglês' },
    { id: 5, nome: 'Rodolfo' , disciplina: 'Programação' }
  ];

  ngOnInit() {
  }

}
