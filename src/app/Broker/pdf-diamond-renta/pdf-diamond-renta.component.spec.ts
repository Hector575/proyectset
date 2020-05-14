import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfDiamondRentaComponent } from './pdf-diamond-renta.component';

describe('PdfDiamondRentaComponent', () => {
  let component: PdfDiamondRentaComponent;
  let fixture: ComponentFixture<PdfDiamondRentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfDiamondRentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfDiamondRentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
