import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Message } from './message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  baseUrl = 'http://techlinetelecom.com.br/message';

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

  send(message: Message): Observable<Message> {

    return this.http.post<Message>(this.baseUrl, message).pipe(  //o pipe combina multiplas funções em uma só
      catchError(e => this.error(e))
    )
  }

  error(e: any): Observable<any> {
    this.Toast.fire({
      icon: 'error',
      title: 'Erro no envio da mensagem.'
    })
    return EMPTY
  }
}
