import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centrais',
  templateUrl: './centrais.component.html',
  styleUrls: ['./centrais.component.css']
})
export class CentraisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

}
