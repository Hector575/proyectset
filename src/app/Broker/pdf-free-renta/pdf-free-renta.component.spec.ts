import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfFreeRentaComponent } from './pdf-free-renta.component';

describe('PdfFreeRentaComponent', () => {
  let component: PdfFreeRentaComponent;
  let fixture: ComponentFixture<PdfFreeRentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfFreeRentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfFreeRentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
