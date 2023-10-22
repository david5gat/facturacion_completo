import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { servicio, serviciopFactura } from 'src/app/interface/interface';
import { CompartirObjService } from 'src/app/servicios/compartir-obj.service';
import { ConexionService } from 'src/app/servicios/conexion.service';




@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit{

  constructor( private conexionService: ConexionService,
               private compartirObj:CompartirObjService, 
               private route : Router ){}

  carritos!: servicio[];

  compra!: serviciopFactura;

  ngOnInit(): void {
   this.carritos = this.compartirObj.enviarDatos()

   this.ultimaFactura()
  }

  UltimoID! : number;
  
  Comprar(){

    let correolocal:string = localStorage.getItem('sesion')!

    let factura : serviciopFactura = {
      n_factura:this.UltimoID,
      correo: correolocal, 
      Servicios: this.serviciosF(), 
      valor: this.servicioFactura()
    }

    console.log(correolocal);
    console.log(this.UltimoID);
    
    

    //  this.conexionService.postFactura(factura).subscribe(r => console.log(r))
    //   localStorage.clear()
    //   this.route.navigateByUrl('/inicio')
  }
  

   serviciosF(){
     const nombreServicioString = this.carritos
     .filter(obj => obj.nombreServicio) // Filtrar objetos con nombreServicio definido
     .map(obj => obj.nombreServicio) // Extraer valores de nombreServicio
     .join(','); // Unir los valores con comas
     return nombreServicioString;
   }


  servicioFactura (){
   const sumaValores = this.carritos
   .filter(obj => Object.keys(obj).length !== 0) // Filtrar objetos no vacíos
   .reduce((acumulador, obj) => acumulador + obj.valor, 0);
   return sumaValores;
  }

  ultimaFactura(){
   return this.conexionService.getFactura()
    .pipe(tap((r)=>{ 
     const ultimoId  = r.reduce((ultimo,r_id)=>Math.max(ultimo,r_id.n_factura),0)
     this.UltimoID = ultimoId+1;
    })).subscribe()
  }

}
