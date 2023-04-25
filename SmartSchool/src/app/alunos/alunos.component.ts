import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos';

  public alunos = [
    {id: 1, nome: 'Marta', sobrenome: 'Kent', telefone: 332255},
    {id: 2, nome: 'Paula', sobrenome: 'Isabela', telefone: 3784835},
    {id: 3, nome: 'Laura', sobrenome: 'Antonia', telefone: 33433255},
    {id: 4, nome: 'Luiza', sobrenome: 'Maria', telefone: 33229695},
    {id: 5, nome: 'Lucas', sobrenome: 'Machado', telefone: 3342332255},
    {id: 6, nome: 'Pedro', sobrenome: 'alvares', telefone: 87932255},
    {id: 7, nome: 'Paulo', sobrenome: 'José', telefone: 57668932255},

  ];


  constructor() { }

  ngOnInit() {
  }

}
