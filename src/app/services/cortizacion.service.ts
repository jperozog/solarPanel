import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class CortizacionService {

  constructor(private http: HttpClient) { }


  enviarDatosCotizacion(data:any){
    return this.http.post("https://brinkerapp.herokuapp.com/mail/sendmailsolar",data)
  }

  enviarDatosRegistro(data:any){
    return this.http.post("https://brinkerapp.herokuapp.com/mail/sendmailembajador",data)
  }
}
