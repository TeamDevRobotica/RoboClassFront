import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { LoginPage } from '../login/login.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})

export class RegistrarsePage {
  profileForm = this.fb.group({
    nombre: [''],
    apellido: [''],
    correo:[''],
    dni: [''],
    docente:[''],
    estudiante:[''],
    usuario: this.fb.group({
      usuario: [''],
      clave: ['']
     
    }),
   
  });
  navCtrl: any;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  registrarse() {
    this.auth.agregarDocente(this.profileForm.value).subscribe(datos=>console.log(datos));
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.profileForm.reset();
    this.router.navigate(['/login']);
  }
  
}
