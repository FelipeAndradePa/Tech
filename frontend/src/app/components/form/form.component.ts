import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from 'src/app/services/formService/form.model';
import { FormService } from 'src/app/services/formService/form.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  forms: Form = {
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
  constructor(private formservice: FormService, private router: Router) { }

  ngOnInit(): void {
  }

  sendCall(): void {

    if(this.forms.name && this.forms.company && this.forms.email && this.forms.subject && this.forms.help) {
       
      this.formservice.send(this.forms).subscribe(
         () => {
            this.Toast.fire({
            icon: 'success',
            title: 'CHAMADO ENVIADO!',
            text: 'Seu chamado foi enviado para nosso sistema, entraremos em contato em breve.'
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

}
