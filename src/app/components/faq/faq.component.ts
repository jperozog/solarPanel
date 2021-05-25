import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  resolucion:number = 1000
  faBars = faBars;
  constructor() { }

  ngOnInit(): void {
    this.resolucion = screen.height - 100
  }

}
