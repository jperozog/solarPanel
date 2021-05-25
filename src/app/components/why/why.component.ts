import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.scss']
})
export class WhyComponent implements OnInit {
  resolucion:number = 1000
  faBars = faBars;
  constructor() { }

  ngOnInit(): void {
    this.resolucion = screen.height - 100
  }

}
