import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cftv',
  templateUrl: './cftv.component.html',
  styleUrls: ['./cftv.component.css']
})
export class CftvComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

}
