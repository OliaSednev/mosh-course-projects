import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderReactiveFormComponent } from './form-builder-reactive-form.component';

describe('FormBuilderReactiveFormComponent', () => {
  let component: FormBuilderReactiveFormComponent;
  let fixture: ComponentFixture<FormBuilderReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBuilderReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuilderReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
