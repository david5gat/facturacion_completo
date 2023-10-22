import { Injectable } from '@angular/core';
import { servicio, serviciopFactura } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class CompartirObjService {

  constructor() { }

  factura : any[]= [];
  
  n= 0;


  arregloServicios(arreglo : string | null ): servicio[] {

    let servicios: servicio[] = [];
   
    if (typeof arreglo === 'string') {
      servicios = JSON.parse(arreglo)
    } else {
      
    }
       
    return servicios;


  }


  serviciosFactura(servicioF : servicio){

    

    this.n = localStorage.length + 1;
     
    localStorage.setItem(`carrito${this.n}`,JSON.stringify(servicioF))
    console.log(this.n,localStorage.length);
  }


  enviarDatos(){

    let n = localStorage.length + 1;

    for (let i = 0; i < n; i++) {
      let start =  this.arregloServicios(localStorage.getItem(`carrito${i}`))
       this.factura.push(start)

      // console.log(start,n);
    }
    
      return this.factura
    
  }





}
