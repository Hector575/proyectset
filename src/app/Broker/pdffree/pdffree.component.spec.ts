import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdffreeComponent } from './pdffree.component';

describe('PdffreeComponent', () => {
  let component: PdffreeComponent;
  let fixture: ComponentFixture<PdffreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdffreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdffreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
