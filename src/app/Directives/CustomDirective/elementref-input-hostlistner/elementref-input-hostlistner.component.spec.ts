import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementrefInputHostlistnerComponent } from './elementref-input-hostlistner.component';

describe('ElementrefInputHostlistnerComponent', () => {
  let component: ElementrefInputHostlistnerComponent;
  let fixture: ComponentFixture<ElementrefInputHostlistnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementrefInputHostlistnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementrefInputHostlistnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
