import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  logos: string [] = ['../../../assets/cvcLogo.png',
                      '../../../assets/ingohLogo.png',
                      '../../../assets/lagBBMLogo.png',
                      '../../../assets/theFiberLogo.png',
                      '../../../assets/eliteLogo.png',
                      '../../../assets/dfLogo.png',
                      '../../../assets/kassioLogo.png',
                      '../../../assets/guardLogo.png']

  alts: string [] = ['CVC', 'Ingoh', 'LagExpress', 'The Fiber', 'A Elite', 'DF Distribuídora', 'Kassio Perfumaria', 'Guard Segurança']

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,0);

    this.fill(0);

    for(var i = 2; i <= 4; i++) {
      document.getElementById(`${i}`)!.style.backgroundColor = "#E0E0E0";
    }
  }

  scroll (el: HTMLElement) {
    el.scrollIntoView();
  }

  change (ev : Event) {

    const el = ev.target as HTMLElement;
    const id = parseInt(el.id);

    el.style.backgroundColor = "#FF3D00";

    for(var i = 1; i <= 4; i++) {
      if (i != id) {
        document.getElementById(`${i}`)!.style.backgroundColor = "#E0E0E0";
      }
    }

    this.fill(id - 1);

  }

  fill (j: number) {

    for (var i = 0; i <= 4; i++) {

      const container = document.getElementById(`l${i + 1}`);
      container!.setAttribute('src', this.logos[j]);
      container!.setAttribute('alt', this.alts[j]);
      container!.setAttribute('title', this.alts[j]);
      j++;
    }

  }

}
