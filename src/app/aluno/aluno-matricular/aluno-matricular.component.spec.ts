import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoMatricularComponent } from './aluno-matricular.component';

describe('AlunoMatricularComponent', () => {
  let component: AlunoMatricularComponent;
  let fixture: ComponentFixture<AlunoMatricularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunoMatricularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoMatricularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
