import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfDeRegisComponent } from './inf-de-regis.component';

describe('InfDeRegisComponent', () => {
  let component: InfDeRegisComponent;
  let fixture: ComponentFixture<InfDeRegisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfDeRegisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfDeRegisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
