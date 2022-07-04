import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Curso } from '../model/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private httpClient: HttpClient) { }
list(): Curso[] {
  return [
    {_id:'1', nome:'Angular', categoria:'Front-end'},
    {_id:'2', nome:'Java', categoria:'Back-end'},
    {_id:'3', nome:'PHP', categoria:'Back-end'},
    {_id:'4', nome:'MySQL', categoria:'Banco de dados'},
    {_id:'1', nome:'Flutter', categoria:'Front-end'},
    {_id:'1', nome:'Redes', categoria:'Infraestrutura'}
  ];
}

}
