import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = "http://techlinetelecom.com.br/log/login.php";
  constructor(private http: HttpClient) { }

  consult(login: Login): Observable<number> {

    return this.http.post<number>(this.baseUrl, login)
  }

  error(e: any): Observable<any> {

    alert("Ocorreu um erro.");
    return EMPTY
  }
}
