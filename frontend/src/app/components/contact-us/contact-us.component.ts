import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/messageService/message.service';
import {Message} from '../../services/messageService/message.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  messages: Message = {
    name: '',
    company: '',
    email: '',
    subject: '',
    help: ''
  }

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    allowEnterKey: true,
    showCloseButton: true,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  Verif = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    allowEnterKey: true,
    showCloseButton: true,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  constructor(private messageService: MessageService, private router: Router) { }
  
  sendMessage(): void {
    
    if(this.messages.name && this.messages.company && this.messages.email && this.messages.subject && this.messages.help) {
       
       this.messageService.send(this.messages).subscribe(
          () => {
             this.Toast.fire({
             icon: 'success',
             title: 'MENSAGEM ENVIADA!',
             text: 'Sua mensagem foi enviada para nosso sistema, entraremos em contato em breve.'
            })
          }
        )
    }
    else {
      this.Verif.fire({
        icon: 'error',
        title: 'ERRO NO ENVIO',
        text: 'Todos os campos do formulário devem ser preenchidos.'
      })
    }
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }


}
