import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/Professor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public modalRef: BsModalRef;
  public titulo = 'Professores';
  public professorSelecionado: Professor;
  public professorForm: FormGroup;
 


  public professores = [
  {id: 1, nome: 'Lauro ', disciplina: 'matemática'},
  {id: 2, nome: 'Roberto', disciplina: 'português' },
  {id: 3, nome: 'Ronaldo', disciplina: 'biologia'} ,
  {id: 4, nome: 'Rodrigo', disciplina: 'química'},
  {id: 5, nome: 'Alexandre',disciplina: 'física'},

  ]; 
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
 
  constructor(private fb: FormBuilder, 
              private modalService: BsModalService) { }

  
  ngOnInit() {
    this.criarForm();
  }

  
  criarForm(){
    this.professorForm = this.fb.group({
      nome: ['', Validators.required],
      disciplina: ['', Validators.required]
    });
  }

  professorSubmit() {
    console.log(this.professorForm.value);
  }

  professorSelect(professor: Professor) {
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor);
  }

  voltar() {
    this.professorSelecionado = undefined;
  }





}
