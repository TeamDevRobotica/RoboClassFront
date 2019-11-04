import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreardesafioPage } from './creardesafio.page';

describe('CreardesafioPage', () => {
  let component: CreardesafioPage;
  let fixture: ComponentFixture<CreardesafioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreardesafioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreardesafioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
