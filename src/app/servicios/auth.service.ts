import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;

  docenteUrl = 'http://192.168.20.79:50000/docente';
  usuariosUrl = 'http://192.168.20.79:50000/usuario';
  

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.usuariosUrl);
  }

  /** POST: add a new hero to the server */
  agregarUsuario(usuario: any): Observable<any> {
    return this.http.post<any>(this.usuariosUrl, usuario, httpOptions).pipe();
  }
  agregarDocente(docente: any): Observable<any> {
    return this.http.post<any>(this.docenteUrl, docente, httpOptions).pipe();
  }
  
}
