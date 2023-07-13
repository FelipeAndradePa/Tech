import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/services/loginService/login.model';
import { LoginService } from 'src/app/services/loginService/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login =  {

    user: '',
    password: ''
  }

  Toast = Swal.mixin({
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

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

  consultLogin(): void {

    if (this.login.user && this.login.password) {

      this.loginService.consult(this.login).subscribe(
        
        (res) => {

          if(res) {

              setTimeout( () => {
                this.router.navigateByUrl("/form");
              }, 3000)

              this.Toast.fire({
                icon: 'success',
                title: 'ACESSO AUTORIZADO',
                text: 'Você será redirecionado ao formulário para abrir um chamado.'
              })
              this.login.user = "";
              this.login.password = "";
          }
          else {
              this.Toast.fire({
                icon: 'error',
                title: 'ACESSO NEGADO',
                text: 'Usuário ou senha incorretos.'
              })
          }
        }
      )
    }
    else {
      this.Toast.fire({
        icon: 'warning',
        title: 'ATENÇÃO',
        text: 'Todos os campos devem ser preenchidos.'
      })
    }
  }

}
