import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfExclusiveRentaComponent } from './pdf-exclusive-renta.component';

describe('PdfExclusiveRentaComponent', () => {
  let component: PdfExclusiveRentaComponent;
  let fixture: ComponentFixture<PdfExclusiveRentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfExclusiveRentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfExclusiveRentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
