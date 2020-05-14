import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfExclusiveVentaComponent } from './pdf-exclusive-venta.component';

describe('PdfExclusiveVentaComponent', () => {
  let component: PdfExclusiveVentaComponent;
  let fixture: ComponentFixture<PdfExclusiveVentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfExclusiveVentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfExclusiveVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
