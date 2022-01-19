import { Component, OnInit, TemplateRef } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { Professor } from "../models/Professor";
import { ProfessorService } from "./professor.service";

@Component({
  selector: "app-professores",
  templateUrl: "./professores.component.html",
  styleUrls: ["./professores.component.scss"],
})
export class ProfessoresComponent implements OnInit {
  public modalRef: BsModalRef;
  public professorForm: FormGroup;
  public titulo = "Professores";
  public professorSelecionado: Professor;

  public professores: Professor[];

  constructor(
    private fb: FormBuilder,
    private modalService: BsModalService,
    private professorService: ProfessorService
  ) {
    this.criarForm();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.carregarProfessores();
  }

  carregarProfessores() {
    this.professorService.getAll().subscribe(
      (professores: Professor[]) => {
        this.professores = professores;
      },
      (erro: any) => {
        console.log(erro);
      }
    );
  }

  salvarProfessor(professor: Professor) {
    this.professorService.put(professor).subscribe(
      (retorno: Professor) => {
        console.log(retorno);
        this.carregarProfessores();
      },
      (erro: any) => {
        console.log(erro);
      }
    );
  }

  criarForm() {
    this.professorForm = this.fb.group({
      id: [""],
      nome: ["", Validators.required],
      //disciplina: ["", Validators.required],
    });
  }

  professorSubmit() {
    this.salvarProfessor(this.professorForm.value);
  }

  professorSelected(professor: Professor) {
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor);
  }

  voltar() {
    this.professorSelecionado = null;
  }
}
