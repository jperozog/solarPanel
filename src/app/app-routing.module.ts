import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from './components/landing/landing.component'
import {WhyComponent} from './components/why/why.component'
import {FaqComponent} from './components/faq/faq.component'
import {EmbajadorComponent} from './components/embajador/embajador.component'
import {JoinComponent} from './components/join/join.component'
import { EducationComponent } from './components/education/education.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'why', component: WhyComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'embajador', component: EmbajadorComponent },
  { path: 'join', component: JoinComponent },
  { path: 'education', component: EducationComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
