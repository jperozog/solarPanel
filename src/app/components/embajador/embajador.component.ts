import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'
import { cotizacion } from '../../models/cotizacion'
import { CortizacionService } from '../../services/cortizacion.service'
import {registro} from '../../models/registro'

@Component({
  selector: 'app-embajador',
  templateUrl: './embajador.component.html',
  styleUrls: ['./embajador.component.scss']
})
export class EmbajadorComponent implements OnInit {
  resolucion:number = 0
  resolucion2:number = 0
  faBars = faBars;
  medida:string = "50%"
  posicion:string = "center"
  cotiza: cotizacion = {
    factura: 0,
    nombre: "",
    apellido: "",
    calle: "",
    unidad: "",
    ciudad: "",
    estado: "",
    codigopostal: "",
    telefono: "",
    correo: "",
  }
  regis : registro ={
    nombre: "",
    apellido: "",
    telefono: "",
    correo: "",
    idioma:""
  }

  constructor( private cotizacionService: CortizacionService) { }

  ngOnInit(): void {
    this.resolucion = screen.height - 100
    this.resolucion2 = screen.width;
    
    if(this.resolucion2 > 1100){
        this.medida ="50%"
    }else{
      this.medida = "90%"
    }
    
  }

  
  algo() {

    Swal.fire({
      title: '<p class="tituloModal">Felicitaciones, se encuentra en un área privilegiada para el ahorro de energía solar.</p>',
      text: 'Hello world!',
      width: `${this.medida}`,
      confirmButtonColor: '#49A015',
      confirmButtonText: 'Enviar',
      position:"center",
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
      width: `${this.medida}`,
      confirmButtonColor: '#49A015',
      confirmButtonText: 'Unirse',
      customClass: {
        container: 'my-swal'
      },
      position:"center"
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


  closeModal() {
    
    let modal = document.getElementById("myModal") as HTMLElement;

      modal.style.display = "none";

     this.cotiza = {
      factura: 0,
      nombre: "",
      apellido: "",
      calle: "",
      unidad: "",
      ciudad: "",
      estado: "",
      codigopostal: "",
      telefono: "",
      correo: "",
     } 

  }


  openModal() {
    // Get the modal
    let modal = document.getElementById("myModal") as HTMLElement;

      modal.style.display = "block";
      
   console.log("algo")

   
  }

  closeModal2() {
    
    let modal2 = document.getElementById("myModal2") as HTMLElement;

      modal2.style.display = "none";

      this.regis ={
        nombre: "",
        apellido: "",
        telefono: "",
        correo: "",
        idioma:""
      }

  }


  openModal2() {
    // Get the modal
    let modal2 = document.getElementById("myModal2") as HTMLElement;

      modal2.style.display = "block";
      
   console.log("algo")

   
  }


  enviarCotizacion(){

    this.cotizacionService.enviarDatosCotizacion(this.cotiza).subscribe(
      res => {
        console.log(res),
        Swal.fire(
          'Datos Enviados',
          'Sus datos fueron enviados Correctamente!',
          'success'
        ),
        this.closeModal()
      }, err => console.log(err))

  }

  enviarRegistro(){

    this.cotizacionService.enviarDatosRegistro(this.regis).subscribe(
      res => {
        console.log(res),
        Swal.fire(
          'Datos Enviados',
          'Sus datos fueron enviados Correctamente!',
          'success'
        ),
        this.closeModal2()
      }, err => console.log(err))

  }

}
