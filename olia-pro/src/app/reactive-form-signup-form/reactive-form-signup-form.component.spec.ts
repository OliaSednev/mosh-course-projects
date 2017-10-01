import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormSignupFormComponent } from './reactive-form-signup-form.component';

describe('ReactiveFormSignupFormComponent', () => {
  let component: ReactiveFormSignupFormComponent;
  let fixture: ComponentFixture<ReactiveFormSignupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormSignupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormSignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
