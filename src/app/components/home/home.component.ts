import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = '';
  cont: string[] = [];

  constructor() { }
  
  ngOnInit(): void {
    window.scrollTo(0,0);
  }
   
  changeContent(event?: MouseEvent){
    
    
    const ev = event!.target as HTMLButtonElement;
    const ids = ev.id;
    const container = document.querySelector('.divText');
    //document.getElementById('contSolut')!.innerHTML = ""; //limpa o html
    console.log(ev);

    if (ids === 'URAb'){

      this.title = 'URA programada';
      this.cont = ['Anúncios e gravações personalizados', 
                    'Integração com condições de tempo',
                    'Possibilidade de realimentar a URA',
                    'Direcionamento por dígito'];
    }
    else if (ev.id === 'Gravb'){
      
      this.title = 'Gravações de chamadas';
      this.cont = ['Gravação em todos os estágios da ligação', 
                    'Opção para download e para ouvir online',
                    'Várias formas de encontrar a ligação desejada',
                    'Tabela informativa'];
    }
    else if (ids === 'Relb'){

      this.title = 'Relatórios diversos';
      this.cont = ['Ligações atnedidas e não atendidas',
                   'Relatórios de tarifas e faturamentos',
                   'Uso de canais simultâneos',
                   'Relatórios gráficos por ramal, grupo ou fila',
                   'Resumo das operações de cada ramal ou agente'];
    }
    else if (ids === 'Callb'){

      this.title = 'Módulo para call center';
      this.cont = ['Agentes estáticos e dinâmicos',
                   'Relatórios de pausas',
                   'Benefícios para o supervisor',
                   'Detalhes de chamadas',
                   'Login e Logout de agentes controlados'];
    }
    else if (ids === 'Logb'){

      this.title = 'Direcionamento lógico';
      this.cont = ['Rotas de entrada',
                   'Direcionamento para celular',
                   'Diversas estratégias de toque',
                   'Flexibilidade em relação aos horários e dias'];
    }
    else if (ids === 'Contb'){

      this.title = 'Controle funcional';
      this.cont = ['Controle de recursos do sistema',
                   'Controle das atividades de comunicação',
                   'Painel do operador',
                   'Controle das estratégias de atendimento'];
    }
  }

}
