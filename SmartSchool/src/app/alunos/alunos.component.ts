import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public modalRef: BsModalRef;
  public alunoForm : FormGroup;
  public titulo = 'Alunos'
  public alunoSelecionado : Aluno;
  public textSimple: string;

  public alunos = [
    { id: 1 , nome: 'Marta', sobrenome: 'Kent' , telefone: '6669998877' },
    { id: 2 , nome: 'Paula', sobrenome: 'Isabela' , telefone: '45345345' },
    { id: 3 , nome: 'Laura', sobrenome: 'Antonias' , telefone: '467788' },
    { id: 4 , nome: 'Luiza', sobrenome: 'Maria' , telefone: '9874423' },
    { id: 5 , nome: 'Lucas', sobrenome: 'MAchado' , telefone: '652358741' },
    { id: 6 , nome: 'Pedro', sobrenome: 'Alvares' , telefone: '985662412' },
    { id: 7 , nome: 'Paulo', sobrenome: 'José' , telefone: '888996655' }
  ];

  constructor(private fb : FormBuilder, private modalService: BsModalService) 
  {
    this.criarForm();
  }

  openModal(template: TemplateRef<any> ){
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
  }

  criarForm(){
    this.alunoForm = this.fb.group({
      nome:  ['', Validators.required],
      sobrenome: [''],
      telefone: ['']
    });
  }

  alunoSubmit(){
    
    console.log(this.alunoForm.value);

  }

  alunoSelected(aluno: Aluno) {
    
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar(){
    this.alunoSelecionado = null;
  }


}
