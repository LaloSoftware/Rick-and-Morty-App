import { Component, OnInit } from '@angular/core';
import { RymService } from 'src/app/services/rym.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.sass']
})
export class LugaresComponent implements OnInit {
  info: any;
  datos: any[] = [];
  pagina = 1;
  cargando = true;

  constructor(private rymS: RymService) { }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos(){
    this.cargando = true;
    this.rymS.obtenerlugares(this.pagina).subscribe(
      (data: any) => {
        this.info = data.info;
        this.datos = data.results;
      }, err => {
        console.log(err); 
      }, () => {
        this.cargando = false
      }
    );
  }

  cambiarPagina(e: any){
    this.pagina = e['pageIndex'] + 1;
    this.obtenerDatos();
  }
}
