import { Component, OnInit, TemplateRef } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { Aluno } from "../models/Aluno";
import { AlunoService } from "./aluno.service";

@Component({
  selector: "app-alunos",
  templateUrl: "./alunos.component.html",
  styleUrls: ["./alunos.component.css"],
})
export class AlunosComponent implements OnInit {
  public modalRef: BsModalRef;
  public alunoForm: FormGroup;
  public titulo = "Alunos";
  public alunoSelecionado: Aluno;
  public textSimple: string;
  public modo = "post";

  public alunos: Aluno[];

  constructor(
    private fb: FormBuilder,
    private modalService: BsModalService,
    private alunoService: AlunoService
  ) {
    this.criarForm();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.carregarAlunos();
  }

  carregarAlunos() {
    this.alunoService.getAll().subscribe(
      (alunos: Aluno[]) => {
        this.alunos = alunos;
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }

  criarForm() {
    this.alunoForm = this.fb.group({
      id: [""],
      nome: ["", Validators.required],
      sobrenome: [""],
      telefone: [""],
    });
  }

  salvarAluno(aluno: Aluno) {
    aluno.id === 0 ? (this.modo = "post") : (this.modo = "put");

    this.alunoService[this.modo](aluno).subscribe(
      (model: Aluno) => {
        console.log(model);
        this.carregarAlunos();
      },
      (error: any) => {
        console.log("Deu erro");
        console.log(error);
      }
    );
  }

  alunoSubmit() {
    this.salvarAluno(this.alunoForm.value);
  }

  alunoNovo() {
    this.alunoSelecionado = new Aluno();
    this.alunoForm.patchValue(this.alunoSelecionado);
  }

  alunoSelected(aluno: Aluno) {
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar() {
    this.alunoSelecionado = null;
  }
}
