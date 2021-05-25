import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from './components/landing/landing.component'
import {WhyComponent} from './components/why/why.component'
import {FaqComponent} from './components/faq/faq.component'
import {EmbajadorComponent} from './components/embajador/embajador.component'

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'why', component: WhyComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'embajador', component: EmbajadorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
