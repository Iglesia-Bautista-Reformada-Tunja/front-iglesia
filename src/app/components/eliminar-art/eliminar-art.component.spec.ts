import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarArtComponent } from './eliminar-art.component';

describe('EliminarArtComponent', () => {
  let component: EliminarArtComponent;
  let fixture: ComponentFixture<EliminarArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarArtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
