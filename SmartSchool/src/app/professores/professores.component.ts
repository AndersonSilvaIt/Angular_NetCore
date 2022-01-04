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
    {nome: 'Emanuel'},
    {nome: 'Claudia'},
    {nome: 'Maria'},
    {nome: 'Eduardo'},
    {nome: 'Rodolfo'}
  ]

  ngOnInit() {
  }

}
