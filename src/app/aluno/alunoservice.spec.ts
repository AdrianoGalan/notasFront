/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlunoServiceService } from './alunoservice';

describe('Service: AlunoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlunoServiceService]
    });
  });

  it('should ...', inject([AlunoServiceService], (service: AlunoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
