import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

declare var window: any;

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {
  nombre = 'Miguel';
  edad = 25;
  nombreCapitalizado = 'MIGUEL';

  nuevoNombre = '';
  nuevaEdad = '';
  nuevoCapitalizado = '';

  abrirCambiarNombre() {
    this.nuevoNombre = this.nombre;
    let modal = new window.bootstrap.Modal(
      document.getElementById('modalNombre')
    );
    modal.show();
  }

  abrirCambiarEdad() {
    this.nuevaEdad = String(this.edad);
    let modal = new window.bootstrap.Modal(
      document.getElementById('modalEdad')
    );
    modal.show();
  }

  abrirReset() {
    this.nuevoCapitalizado = this.nombreCapitalizado;
    let modal = new window.bootstrap.Modal(
      document.getElementById('modalReset')
    );
    modal.show();
  }

  guardarNombre() {
    this.nombre = this.nuevoNombre;
  }

  guardarEdad() {
    this.edad = Number(this.nuevaEdad);
  }

  guardarReset() {
    this.nombreCapitalizado = this.nuevoCapitalizado;
  }
}
