import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores';

  public professorSelecionado: string | undefined;

  public professores = [
  {id: 1, nome: 'Lauro ', disciplina: 'matemática'},
  {id: 2, nome: 'Roberto', disciplina: 'português' },
  {id: 3, nome: 'Ronaldo', disciplina: 'biologia'} ,
  {id: 4, nome: 'Rodrigo', disciplina: 'química'},
  {id: 5, nome: 'Alexandre',disciplina: 'física'},

  ];

   professorSelect(professor: any) {
    this.professorSelecionado = professor.nome;
  }

  voltar() {
    this.professorSelecionado = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
