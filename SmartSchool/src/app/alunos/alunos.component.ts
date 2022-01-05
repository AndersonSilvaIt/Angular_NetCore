import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

titulo = 'Alunos'

  public alunos = [
    { id: 1 , nome: 'Marta', sobrenome: 'Kent' , telefone: '6669998877' },
    { id: 2 , nome: 'Paula', sobrenome: 'Isabela' , telefone: '45345345' },
    { id: 3 , nome: 'Laura', sobrenome: 'Antonias' , telefone: '467788' },
    { id: 4 , nome: 'Luiza', sobrenome: 'Maria' , telefone: '9874423' },
    { id: 5 , nome: 'Lucas', sobrenome: 'MAchado' , telefone: '652358741' },
    { id: 6 , nome: 'Pedro', sobrenome: 'Alvares' , telefone: '985662412' },
    { id: 7 , nome: 'Paulo', sobrenome: 'José' , telefone: '888996655' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
