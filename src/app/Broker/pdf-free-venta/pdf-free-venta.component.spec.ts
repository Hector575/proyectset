import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfFreeVentaComponent } from './pdf-free-venta.component';

describe('PdfFreeVentaComponent', () => {
  let component: PdfFreeVentaComponent;
  let fixture: ComponentFixture<PdfFreeVentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfFreeVentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfFreeVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
