import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestroPastorComponent } from './nuestro-pastor.component';

describe('NuestroPastorComponent', () => {
  let component: NuestroPastorComponent;
  let fixture: ComponentFixture<NuestroPastorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestroPastorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestroPastorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
