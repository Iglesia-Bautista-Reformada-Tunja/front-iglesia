import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarHistoriaComponent } from './eliminar-historia.component';

describe('EliminarHistoriaComponent', () => {
  let component: EliminarHistoriaComponent;
  let fixture: ComponentFixture<EliminarHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarHistoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
