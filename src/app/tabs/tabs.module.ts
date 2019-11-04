import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
        { 
          path: 'alumno', 
          loadChildren: () =>
              import('../alumno/alumno.module').then(m => m.AlumnoPageModule) 
        },
        { path: 'docente', loadChildren: '../docente/docente.module#DocentePageModule' },
        { path: 'perfil', loadChildren: '../perfil/perfil.module#PerfilPageModule' },
        // { path: 'creardesafio', loadChildren: '../creardesafio/creardesafio.module#CreardesafioPageModule' },

        
    ]
  },
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'docente',
    redirectTo:'/tabs/docente',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
