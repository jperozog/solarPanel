import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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

}
