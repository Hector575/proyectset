import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngforComponent } from './ingfor.component';

describe('IngforComponent', () => {
  let component: IngforComponent;
  let fixture: ComponentFixture<IngforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
