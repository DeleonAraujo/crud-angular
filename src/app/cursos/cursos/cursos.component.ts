import { Curso } from './../model/curso';
import { Component, OnInit } from '@angular/core';
import { CursosService } from '../services/cursos.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: Curso[] = [];
  displayedColumns = ['nome', 'categoria'];

  //cursosService = new CursosService;

  constructor(private cursosService : CursosService) {
    //this.cursosService = new CursosService();

   }

  ngOnInit(): void {
    this.cursos = this.cursosService.list();
  }

}
