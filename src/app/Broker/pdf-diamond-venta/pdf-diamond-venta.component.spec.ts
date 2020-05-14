import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfDiamondVentaComponent } from './pdf-diamond-venta.component';

describe('PdfDiamondVentaComponent', () => {
  let component: PdfDiamondVentaComponent;
  let fixture: ComponentFixture<PdfDiamondVentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfDiamondVentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfDiamondVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
