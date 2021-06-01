import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'
import { CortizacionService } from '../../services/cortizacion.service'
import { cotizacion } from '../../models/cotizacion'
import { MatDialog } from '@angular/material/dialog';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.scss']
})
export class WhyComponent implements OnInit {
  resolucion:number = 0
  resolucion2:number = 0
  faBars = faBars;
  medida:string = "50%"
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

  constructor(private cotizacionService: CortizacionService) { }

  ngOnInit(): void {
    this.resolucion = screen.height - 100
    this.resolucion2 = screen.width;
    
    if(this.resolucion2 > 1100){
        this.medida ="50%"
    }else{
      this.medida ="90%"
    }
    
  }

  algo() {

    Swal.fire({
      text: 'Hello world!',
      width: `${this.medida}`,
      confirmButtonColor: '#49A015',
      confirmButtonText: 'Enviar',
      position: "center",
    }).then((result) => {
      if (result.isConfirmed) {
        /*
        this.cotizacionService.enviarDatosCotizacion(this.cotiza).subscribe(
          res => {
            console.log(res),
            Swal.fire(
              'Datos Enviados',
              'Sus datos fueron enviados Correctamente!',
              'success'
            )
          }, err => console.log(err))

          */
        console.log(this.cotiza)
      }
    })
  }

  closeModal() {
    
    let modal = document.getElementById("myModal") as HTMLElement;

      modal.style.display = "none";

  }


  openModal() {
    // Get the modal
    let modal = document.getElementById("myModal") as HTMLElement;

      modal.style.display = "block";
      
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


}
