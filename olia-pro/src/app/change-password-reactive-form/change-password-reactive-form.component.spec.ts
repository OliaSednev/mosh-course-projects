import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordReactiveFormComponent } from './change-password-reactive-form.component';

describe('ChangePasswordReactiveFormComponent', () => {
  let component: ChangePasswordReactiveFormComponent;
  let fixture: ComponentFixture<ChangePasswordReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePasswordReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
