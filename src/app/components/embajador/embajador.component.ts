import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-embajador',
  templateUrl: './embajador.component.html',
  styleUrls: ['./embajador.component.scss']
})
export class EmbajadorComponent implements OnInit {
  resolucion:number = 1000
  faBars = faBars;
  constructor() { }

  ngOnInit(): void {
    this.resolucion = screen.height - 100
  }

  
  algo() {

    Swal.fire({
      title: '<p class="tituloModal">Felicitaciones, se encuentra en un área privilegiada para el ahorro de energía solar.</p>',
      text: 'Hello world!',
      width: "50%",
      confirmButtonColor: '#49A015',
      confirmButtonText: 'Enviar',
      position:"bottom",
      html: `
            <div class="primeraParteModal">
              <p class="numero">1</p>
              <h3>¿A CUÁNTO ASCIENDE TU FACTURA DE LUZ TÍPICA?</h3>
              <input type="text" placeholder="$0">
            </div>
            <div class="segundaParteModal">
              <p class="numero">2</p>
              <h3>CUÉNTANOS MÁS SOBRE TI</h3>
              <div class="inputs">
                <div class="input">
                  <label>NOMBRE</label>
                  <input type="text" >
                </div>
                <div class="input">
                  <label>APELLIDO</label>
                  <input type="text" >
                </div>
              </div>
              <div class="inputs">
                <div class="input2">
                  <label>CALLE</label>
                  <input type="text" >
                </div>
                <div class="input3">
                  <label>UNIDAD</label>
                  <input type="text" >
                </div>
              </div>
              <div class="inputs">
                <div class="input4">
                  <label>CIUDAD</label>
                  <input type="text" >
                </div>
                <div class="input3">
                  <label>ESTADO</label>
                  <input type="text" >
                </div>
                <div class="input3">
                  <label>CODIGO POSTAL</label>
                  <input type="text" >
                </div>
              </div>

              <div class="inputs">
              <div class="input">
                <label>TELEFONO</label>
                <input type="text" >
              </div>
              <div class="input">
                <label>EMAIL</label>
                <input type="text" >
              </div>
            </div>

              
              </div>
            </div>
            <div class="terceraParteModal>
            <button>hola</button>
            </div>`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Datos Enviados',
          'Sus datos fueron enviados Correctamente!',
          'success'
        )
      }
    })
  }

  algo2() {

    Swal.fire({
      title: '<p class="tituloModal">Conviértete en un Embajador SOLAR TRUST ENERGY</p>',
      text: 'Hello world!',
      width: "50%",
      confirmButtonColor: '#49A015',
      confirmButtonText: 'Unirse',
      customClass: {
        container: 'my-swal'
      },
      position:"center",
      html: `
            <div class="terceraParteModal">
              <h3>TU INFORMACION</h3>
              <div class="inputs">
                <div class="input">
                  <label>NOMBRE</label>
                  <input type="text" >
                </div>
             

                <div class="input">
                  <label>APELLIDO</label>
                  <input type="text" >
                </div>

                <div class="input">
                  <label>TELEFONO</label>
                  <input type="text" >
                </div>
             

                <div class="input">
                  <label>EMAIL</label>
                  <input type="text" >
                </div>

                <div class="input">
                  <label>PREFERENCIA DE IDIOMA</label>
                  <select name="select">
                  <option value="value1" selected>Español</option>
                  <option value="value2" >Ingles</option>
                  </select>
                </div>

              </div>
            </div>`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Datos Enviados',
          'Sus datos fueron enviados Correctamente!',
          'success'
        )
      }
    })
  }
}