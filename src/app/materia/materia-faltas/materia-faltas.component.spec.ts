import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaFaltasComponent } from './materia-faltas.component';

describe('MateriaFaltasComponent', () => {
  let component: MateriaFaltasComponent;
  let fixture: ComponentFixture<MateriaFaltasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaFaltasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaFaltasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
