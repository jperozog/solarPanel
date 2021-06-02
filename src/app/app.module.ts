import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WhyComponent } from './components/why/why.component';
import { FaqComponent } from './components/faq/faq.component';
import { EmbajadorComponent } from './components/embajador/embajador.component';
import { JoinComponent } from './components/join/join.component';
import {CortizacionService} from './services/cortizacion.service'
import {HttpClientModule} from '@angular/common/http'
import {MatDialogModule} from '@angular/material/dialog';
import { EducationComponent } from './components/education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    WhyComponent,
    FaqComponent,
    EmbajadorComponent,
    JoinComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    FontAwesomeModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [CortizacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
