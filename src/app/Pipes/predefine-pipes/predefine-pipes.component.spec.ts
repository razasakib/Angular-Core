import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredefinePipesComponent } from './predefine-pipes.component';

describe('PredefinePipesComponent', () => {
  let component: PredefinePipesComponent;
  let fixture: ComponentFixture<PredefinePipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredefinePipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredefinePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
