import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ConexionService } from 'src/app/servicios/conexion.service';

import { usuario, verifUsuario } from 'src/app/interface/interface';
import { Router } from '@angular/router';
import { concat, filter } from 'rxjs';
import * as e from 'cors';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.scss']
})
export class IngresarComponent implements OnInit{

  formularioIniUsuario: FormGroup;

  

  constructor( 
              //  private serviceInisesion : IniUsuarioService,
              private ConexionService: ConexionService,
              private fb: FormBuilder,
              public route : Router
    ){ 

      
      

      this.formularioIniUsuario = this.fb.group({
      
        correo: new FormControl("",[Validators.required, Validators.email]),
        contraseña: new FormControl("",[Validators.required]),
        
      })
     }


     palabra: any[]=[];
     

      confirmar = false

     obtenerUsuario(){

      let formCorreo  =  this.formularioIniUsuario.value.correo

      let formContraseña  =  this.formularioIniUsuario.value.contraseña
  
      let CorreoC =  this.ConexionService.getUsuario(formCorreo).subscribe(r =>  {if(r.contraseña === formContraseña){ this.confirmar = true}else{ this.confirmar = false}} )
      
      console.log(this.confirmar);

      this.confirmar = false;
      
     }

     


  iniciarSesion(){
    let formCorreo  =  this.formularioIniUsuario.value.correo

    if (this.confirmar === true){
      localStorage.setItem('sesion',formCorreo)
      this.route.navigateByUrl('/servicios')
    }else{
      console.error(this.confirmar,'verificar correo o contraseña');   
    }
    
  }

  ngOnInit(): void {
    this.iniciarSesion
  }

}
