import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { servicio, serviciopFactura } from 'src/app/interface/interface';
import { CompartirObjService } from 'src/app/servicios/compartir-obj.service';
import { ConexionService } from 'src/app/servicios/conexion.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {


  constructor( private ConexionService : ConexionService,
               private compartirObj : CompartirObjService ){
  }
  
    servicios : servicio | any;
    
   ngOnInit(): void {
     this.ConexionService.getServicios()
     .subscribe(r => this.servicios = r )
    console.log(this.servicios);
  }
  
  comprarServicio(servicio : servicio){
    this.compartirObj.serviciosFactura(servicio)
  }
  
}
