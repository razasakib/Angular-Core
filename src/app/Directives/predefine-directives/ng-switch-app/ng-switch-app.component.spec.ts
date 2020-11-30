import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchAppComponent } from './ng-switch-app.component';

describe('NgSwitchAppComponent', () => {
  let component: NgSwitchAppComponent;
  let fixture: ComponentFixture<NgSwitchAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSwitchAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitchAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
