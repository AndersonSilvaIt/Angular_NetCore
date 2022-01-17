import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Professor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {

  public modalRef: BsModalRef;
  public professorForm : FormGroup;
  public titulo = 'Professores';
  public professorSelecionado: Professor; 

  professores = [
    { id: 1, nome: 'Emanuel' , disciplina: 'Matematica' },
    { id: 2, nome: 'Claudia' , disciplina: 'Física' },
    { id: 3, nome: 'Maria'   , disciplina: 'Português' },
    { id: 4, nome: 'Eduardo' , disciplina: 'Inglês' },
    { id: 5, nome: 'Rodolfo' , disciplina: 'Programação' }
  ];

  constructor(private fb : FormBuilder, private modalService : BsModalService) 
  {
    this.criarForm();
   }

   openModal(template: TemplateRef<any>){
     this.modalRef = this.modalService.show(template);
   }

   ngOnInit() {
  } 

  criarForm(){
    this.professorForm = this.fb.group({
      nome: ['', Validators.required],
      disciplina: ['']
    });
  }

  professorSubmit(){
    console.log(this.professorForm.value);
  }

  professorSelected(professor: Professor){
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor);
  }

  voltar(){
    this.professorSelecionado = null;
  }



}
