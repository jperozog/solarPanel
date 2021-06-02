import { Component, OnInit } from '@angular/core';
import { cotizacion } from '../../models/cotizacion'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { CortizacionService } from '../../services/cortizacion.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  faBars = faBars;
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
