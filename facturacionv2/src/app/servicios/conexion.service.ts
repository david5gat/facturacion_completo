import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable, Subject } from 'rxjs';
import { servicio, serviciopFactura, usuario } from '../interface/interface';


import { CorsOptions } from 'cors';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private usuariosSubject = new Subject<any[]>();

  constructor(
    private http : HttpClient,
    
  ) { }

  url = 'http://localhost:3000'


   getNest(): Observable<any> {
    return  this.http.get(this.url)
  }

   getUsuarios(): Observable<usuario[]> {
   return  this.http.get<usuario[]>(`${this.url}/usuario`)
  }


   getUsuario(id: string): Observable<usuario>{
    return  this.http.get<usuario>(`${this.url}/usuario/${id}`)
  }

   postUsuario(obj:any): Observable<usuario>{
    return  this.http.post<usuario>(`${this.url}/usuario`,obj)
  }

   // servicios
  
   getServicios(): Observable<servicio>{
    return  this.http.get<servicio>(`${this.url}/servicios`)
  }



  getFactura(): Observable<serviciopFactura[]>{
    return this.http.get<serviciopFactura[]>(`${this.url}/factura`)
  }

  
  postFactura(Factura : serviciopFactura): Observable<serviciopFactura>{
    return this.http.post<serviciopFactura>(`${this.url}/factura`,Factura)
  }

}
