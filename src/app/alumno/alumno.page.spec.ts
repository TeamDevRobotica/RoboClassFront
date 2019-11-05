// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { AlumnoPage } from './alumno.page';

// describe('AlumnoPage', () => {
//   let component: AlumnoPage;
//   let fixture: ComponentFixture<AlumnoPage>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ AlumnoPage ],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA],
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AlumnoPage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionPage } from './inscripcion.page';

describe('InscripcionPage', () => {
  let component: InscripcionPage;
  let fixture: ComponentFixture<InscripcionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripcionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

------------------------------------------------------------------------------------------

INSCRIPCION MODULE TS

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { InscripcionPage } from "./inscripcion.page";
import { ModalPage } from "../modal/modal.page";

const routes: Routes = [
  {
    path: "",
    component: InscripcionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InscripcionPage, ModalPage],
  entryComponents: [ModalPage]
})
export class InscripcionPageModule {}

