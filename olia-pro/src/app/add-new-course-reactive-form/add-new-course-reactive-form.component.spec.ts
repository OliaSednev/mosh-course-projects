import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCourseReactiveFormComponent } from './add-new-course-reactive-form.component';

describe('AddNewCourseReactiveFormComponent', () => {
  let component: AddNewCourseReactiveFormComponent;
  let fixture: ComponentFixture<AddNewCourseReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewCourseReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewCourseReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
