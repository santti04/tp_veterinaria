import crypto from 'node:crypto'

export class Usuario{
  constructor(public idUsuario: number, public nombre:string, public apellido:string, public email:string, public nroTelefono:number, public contraseniaUser:string, public mascotas:string [] ){}
}