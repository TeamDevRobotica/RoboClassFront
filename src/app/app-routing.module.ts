import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'registrarse', loadChildren: './registrarse/registrarse.module#RegistrarsePageModule' },
  // { path: 'alumno', loadChildren: './alumno/alumno.module#AlumnoPageModule' },
  { path: 'contenido', loadChildren: './contenido/contenido.module#ContenidoPageModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },
  // { path: 'creardesafio', loadChildren: './creardesafio/creardesafio.module#CreardesafioPageModule' },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
