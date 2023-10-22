import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { usuario } from 'src/app/interface/interface';
import { ConexionService } from 'src/app/servicios/conexion.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
  })
export class RegistroComponent implements OnInit{

  
  
  constructor( private fb: FormBuilder,
    private ConexionService : ConexionService,
    //  private router : Router
    /* formRegusuario: FormControl */ ){
      
      
      this.formularioUsuario = this.fb.group({
        id_usuario: new FormControl(this.Ulid,Validators.required),
        nombre: new FormControl("",[Validators.required]),
        apellido: new FormControl("",[Validators.required]),
        correo: new FormControl("",[Validators.required, Validators.email]),
        contraseña: new FormControl("",[Validators.required]),
        direccion: new FormControl("",[Validators.required]),
        telefono: new FormControl("",[Validators.required])
      })
      
      
    }
    
    formularioUsuario: FormGroup;
    Ulid!: number;
    Ulid2!: usuario[];


  ngOnInit(): void {
     this.verUsuarios()
  }

  verUsuarios() {
    return this.ConexionService.getUsuarios().pipe(
      tap((r)=>{
        const ultimoIdUsuario = r.reduce((maxId, usuario) => Math.max(maxId, usuario.id_usuario), 0);
        this.Ulid = ultimoIdUsuario+1;
      })
    ).subscribe()
    
    
    // .subscribe(r =>  { 
    //   const ultimoIdUsuario = r.reduce((maxId, usuario) => Math.max(maxId, usuario.id_usuario), 0)
    //   this.Ulid = ultimoID;})
    
    //   return console.log(ultimoID);
  }

  //  obtenerUltimoUsuario(){
  //    const sumaValores = this.Ulid
  //   .filter(obj => Object.keys(obj).length !== 0) // Filtrar objetos no vacíos
  //   .reduce((acumulador, obj) => acumulador + obj.id_usuario, 0);
  //  }

   agregarUsuario(){
     this.ConexionService.postUsuario(this.formularioUsuario.value).subscribe(r => r)
   }

}
