import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Form } from './form.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  baseUrl = 'http://techlinetelecom.com.br/form/form.php';

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  constructor(private http: HttpClient) { }

  send(form: Form): Observable<Form> {

    return this.http.post<Form>(this.baseUrl, form).pipe(  //o pipe combina multiplas funções em uma só
      catchError(e => this.error(e))
    )
  }

  error(e: any): Observable<any> {
    this.Toast.fire({
      icon: 'error',
      title: 'Erro no envio da chamado.'
    })
    return EMPTY
  }
}
