import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PureImpureComponent } from './pure-impure.component';

describe('PureImpureComponent', () => {
  let component: PureImpureComponent;
  let fixture: ComponentFixture<PureImpureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PureImpureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureImpureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
