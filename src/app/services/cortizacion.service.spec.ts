import { TestBed } from '@angular/core/testing';

import { CortizacionService } from './cortizacion.service';

describe('CortizacionService', () => {
  let service: CortizacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CortizacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
