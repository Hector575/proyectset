import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfGoldRentaComponent } from './pdf-gold-renta.component';

describe('PdfGoldRentaComponent', () => {
  let component: PdfGoldRentaComponent;
  let fixture: ComponentFixture<PdfGoldRentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfGoldRentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfGoldRentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
