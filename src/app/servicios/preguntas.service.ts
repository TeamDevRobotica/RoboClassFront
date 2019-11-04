import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {
  cargarContenido(value: any) {
    throw new Error("Method not implemented.");
  }
  preguntasUrl = 'http://192.168.20.79:50000/pregunta';


  constructor(private http: HttpClient) { }

  getPreguntas(): Observable<any[]> {
    return this.http.get<any[]>(this.preguntasUrl);
  }

  getPregunta(id: number): Observable<any> {
    const url = `${this.preguntasUrl}/${id}`;
    return this.http.get<any>(url).pipe(/* 
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`)) */
    );
  }

  // /** POST: add a new hero to the server */
  // agregarInstitucion(institucion: Institucion): Observable<Institucion> {
  //   console.log(institucion);
  //   return this.http.post<Institucion>(this.cursosnUrl, { id: 1 }).pipe(
  //    /*  tap((nuevoUsuario: Usuario) => this.log(`added usuario w/ id=${nuevoUsuario.id}`)),
  //     catchError(this.handleError<Usuario>('addHero'))
  //    */);
  // }

  // /** DELETE: delete the hero from the server */
  // borrarInstitucion(usuario: Institucion | number): Observable<Institucion> {
  //   const id = typeof usuario === 'number' ? usuario : usuario.id;
  //   const url = `${this.cursosnUrl}/${id}`;

  //   return this.http.delete<Institucion>(url, httpOptions).pipe(/* 
  //     tap(_ => this.log(`deleted hero id=${id}`)),
  //     catchError(this.handleError<Hero>('deleteHero')) */
  //   );
  // }

  // /** PUT: update the hero on the server */
  // editarInstitucion(usuario: Institucion): Observable<any> {
  //   // const id = typeof usuario === 'number' ? usuario : usuario.id;
  //   const url = `${this.cursosnUrl}/${usuario.id}`;
  //   return this.http.put(url, usuario, httpOptions).pipe(/* 
  //     tap(_ => this.log(`updated hero id=${hero.id}`)),
  //     catchError(this.handleError<any>('updateHero')) */
  //   );
  // }
  cargarPregunta(pregunta: any): Observable<any> {
    return this.http.post<any>(this.preguntasUrl, pregunta, httpOptions).pipe(
     /*  tap((nuevoUsuario: Usuario) => this.log(`added usuario w/ id=${nuevoUsuario.id}`)),
      catchError(this.handleError<Usuario>('addHero'))
     */);
  }
}