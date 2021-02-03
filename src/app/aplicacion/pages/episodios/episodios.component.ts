import { Component, OnInit } from '@angular/core';
import { RymService } from 'src/app/services/rym.service';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.sass']
})
export class EpisodiosComponent implements OnInit {
  info: any;
  datos: any[] = [];
  cargando: boolean = true;
  pagina: number = 1;

  constructor(private rymS: RymService) { }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos(){
    this.cargando = true;
    this.rymS.obtenerEpisodios(this.pagina).subscribe(
      (data: any) => {
        this.info = data.info;
        this.datos = data.results;
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
}
