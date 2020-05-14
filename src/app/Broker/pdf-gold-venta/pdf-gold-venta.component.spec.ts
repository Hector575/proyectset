import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfGoldVentaComponent } from './pdf-gold-venta.component';

describe('PdfGoldVentaComponent', () => {
  let component: PdfGoldVentaComponent;
  let fixture: ComponentFixture<PdfGoldVentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfGoldVentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfGoldVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
