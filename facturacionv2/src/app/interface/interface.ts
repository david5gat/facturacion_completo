export interface Interface {


}

export interface servicio{
    id_servicio: number;
    nombreServicio: string;
    descripcion: string;
    valor: number;
}


export interface usuario{
    id_usuario : number
    nombre : string
    apellido : string
    correo : string | number | any
    contraseña: string | number | any
    telefono : number
    direccion : string | number | any
  }


  export interface verifUsuario{
    correo : string | number | any
    contraseña: string | number | any
  }


  export interface serviciopFactura{
        n_factura: number,
        correo: string,
        Servicios: string,
        valor: number
  }