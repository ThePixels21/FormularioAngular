import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tallerFormulario';
  titulo = 'Institución Universitaria EAM'
  lblNombre = 'Nombre:'
  lblApellido = 'Apellido:'
  lblCedula = 'Cédula:'
  lblSexo = 'Sexo:'
  lblEmail = 'Email:'
  txtGuardar = 'Guardar'
  nombre = ''
  apellido = ''
  cedula = ''
  sexo = 'Masculino'
  email = ''

  mostrar = false

  nombreGuardado = ''
  apellidoGuardado = ''
  cedulaGuardada = ''
  sexoGuardado = ''
  emailGuardado = ''

  mostrarDatos(){
    this.nombreGuardado = this.nombre
    this.apellidoGuardado = this.apellido
    this.cedulaGuardada = this.cedula
    this.sexoGuardado = this.sexo
    this.emailGuardado = this.email

    this.nombre = ''
    this.apellido = ''
    this.cedula = ''
    this.sexo = 'Masculino'
    this.email = ''

    this.mostrar = true
  }
}
