import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RymService } from 'src/app/services/rym.service';
import { PersonajeComponent } from './components/personaje/personaje.component';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.sass']
})
export class PersonajesComponent implements OnInit {
  personajes: any[] = [];
  datos: any | undefined;
  pagina: number;
  cargando: boolean = true;

  constructor(private rymS: RymService, private dialog: MatDialog) {
    this.pagina = 1;
  }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos(){
    this.cargando = true;
    this.rymS.obtenerCaracteres(this.pagina).subscribe(
      (data: any) => {
        this.datos = data.info
        this.personajes = data.results
        this.cargando = false;
      }, err => {
        console.log(err);
      }, () => {
        this.cargando = false;
      }
    );
  }

  cambiarPagina(e: any){
    this.pagina = e['pageIndex'] + 1;
    this.obtenerDatos();
  }

  verPersonaje(personaje: any){
    this.dialog.open(PersonajeComponent, {
      data: personaje
    });
  }
}
