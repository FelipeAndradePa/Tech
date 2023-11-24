import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-manager',
  templateUrl: './call-manager.component.html',
  styleUrls: ['./call-manager.component.css']
})
export class CallManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

}
