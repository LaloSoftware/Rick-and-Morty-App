import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RymService {

  constructor(private _http: HttpClient) { }

  obtenerCaracteres(pagina: number){
    return this._http.get<any[]>(`${environment.URL}/character?page=${pagina}`)
  }

  obtenerCaracter(id: number){
    return this._http.get<any>(`${environment.URL}/character/${id}`);
  }

  obtenerlugares(pagina: number){
    return this._http.get(`${environment.URL}/location?page=${pagina}`);
  }

  obtenerEpisodios(pagina: number){
    return this._http.get(`${environment.URL}/episode?page=${pagina}`);
  }
}
