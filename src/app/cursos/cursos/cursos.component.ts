import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { CursosService } from '../services/cursos.service';
import { Curso } from './../model/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos$: Observable<Curso[]>;
  displayedColumns = ['nome', 'categoria', 'acoes'];

  constructor(private cursosService : CursosService,
    public dialog: MatDialog, private router: Router,
    private route: ActivatedRoute) {
    this.cursos$ = this.cursosService.list().pipe(catchError(error => {
      this.onError('Erro ao carregar os cursos.');
      return of ([])
    })
    );
   }

   onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }


  ngOnInit(): void {
  }

  onAdd() {
    this.router.navigate(['novo'], {relativeTo: this.route});
  }

}
