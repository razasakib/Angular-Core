import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickEventWithinTextFieldComponent } from './click-event-within-text-field.component';

describe('ClickEventWithinTextFieldComponent', () => {
  let component: ClickEventWithinTextFieldComponent;
  let fixture: ComponentFixture<ClickEventWithinTextFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickEventWithinTextFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickEventWithinTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
