import { TestBed } from '@angular/core/testing';

import { ContenidosService } from './contenidos.service';

describe('ContenidosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContenidosService = TestBed.get(ContenidosService);
    expect(service).toBeTruthy();
  });
});
