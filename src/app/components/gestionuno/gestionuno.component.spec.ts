import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionunoComponent } from './gestionuno.component';

describe('GestionunoComponent', () => {
  let component: GestionunoComponent;
  let fixture: ComponentFixture<GestionunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
