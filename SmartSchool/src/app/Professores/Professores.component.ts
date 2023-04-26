import { Component, OnInit } from '@angular/core';
import { Professor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores';

  public professorSelecionado: undefined | Professor;

  public professores = [
  {id: 1, nome: 'Lauro ', disciplina: 'matemática'},
  {id: 2, nome: 'Roberto', disciplina: 'português' },
  {id: 3, nome: 'Ronaldo', disciplina: 'biologia'} ,
  {id: 4, nome: 'Rodrigo', disciplina: 'química'},
  {id: 5, nome: 'Alexandre',disciplina: 'física'},

  ];

   professorSelect(professor: Professor) {
    this.professorSelecionado = professor;
  }

  voltar() {
    this.professorSelecionado = undefined;
  }

  constructor() { }

  ngOnInit() {
  }

}
