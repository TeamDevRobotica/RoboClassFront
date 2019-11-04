import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { ContenidosService } from '../servicios/contenidos.service';
import { CursosService } from '../servicios/cursos.service';
import { PreguntasService } from '../servicios/preguntas.service';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
// export class DocentePage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
export class DocentePage{
  profileForm = this.fb.group({
    titulo: [''],
    contenido: [''],
    publico: [false],
    preguntas: [''],
    });
    cursos:any[];
    contenidos:any[];
    preguntas: any[];
    navCtrl: any;
    constructor(private fb: FormBuilder,private preguntaservicios: PreguntasService  , private contenidoservicio: ContenidosService, private cursoservicio: CursosService) { }

    cargarContenido() {
      this.contenidoservicio.cargarContenido(this.profileForm.value).subscribe(datos=>console.log(datos));
      // this.preguntaservicios.cargarPregunta(this.profileForm.value).subscribe(datos=>console.log(datos));
      // TODO: Use EventEmitter with form value
      console.warn(this.profileForm.value);
      this.profileForm.reset();
      // this.navCtrl.push(LoginPage);
    }
    ngOnInit() {
    this.cursoservicio.getcursos().subscribe(cursos=>{
      this.cursos=cursos
    },err=>{},
    ()=> {
      console.log(this.cursos)
    });
    console.log(this.cursos);
    this.contenidoservicio.getContenidos().subscribe(contenido=>{
      this.contenidos=contenido
    });
    // console.log(this.preguntas);
    // this.preguntaservicios.getPreguntas().subscribe(preguntas=>{
    //   this.preguntas=preguntas
    // });
  }



}
