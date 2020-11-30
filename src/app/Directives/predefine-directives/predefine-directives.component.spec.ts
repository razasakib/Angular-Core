import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredefineDirectivesComponent } from './predefine-directives.component';

describe('PredefineDirectivesComponent', () => {
  let component: PredefineDirectivesComponent;
  let fixture: ComponentFixture<PredefineDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredefineDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredefineDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
