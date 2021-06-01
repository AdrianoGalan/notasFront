import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioHomeComponent } from './relatorio-home.component';

describe('RelatorioHomeComponent', () => {
  let component: RelatorioHomeComponent;
  let fixture: ComponentFixture<RelatorioHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
