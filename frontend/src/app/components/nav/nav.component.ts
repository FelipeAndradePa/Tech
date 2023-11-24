import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit {

  constructor() { }

  @HostListener("window:scroll")
  onScroll(){
    var element1 = document.querySelector('.navigation');
    var element2 = document.querySelector('.connect');

    const current = window.scrollY;

    if(current > 105){
      element1?.classList.add('scrolled');
      element2?.classList.add('scrolled');
    }
    else{
      element1?.classList.remove('scrolled');
      element2?.classList.remove('scrolled');
    }
  }
  
  ngOnInit(): void {
  }

}
