import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LikeComponent } from './like/like.component';
import { NgSwitchCaseComponent } from './ng-switch-case/ng-switch-case.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgForAndTrackByComponent } from './ng-for-and-track-by/ng-for-and-track-by.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormSignupFormComponent } from './reactive-form-signup-form/reactive-form-signup-form.component';
import { AddNewCourseReactiveFormComponent } from './add-new-course-reactive-form/add-new-course-reactive-form.component';
import { FormBuilderReactiveFormComponent } from './form-builder-reactive-form/form-builder-reactive-form.component';
import { ChangePasswordReactiveFormComponent } from './change-password-reactive-form/change-password-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    NgSwitchCaseComponent,
    NgForComponent,
    NgForAndTrackByComponent,
    NgClassComponent,
    BootstrapPanelComponent,
    NgContainerComponent,
    InputFormatDirective,
    ZippyComponent,
    NewCourseFormComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormSignupFormComponent,
    AddNewCourseReactiveFormComponent,
    FormBuilderReactiveFormComponent,
    ChangePasswordReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
