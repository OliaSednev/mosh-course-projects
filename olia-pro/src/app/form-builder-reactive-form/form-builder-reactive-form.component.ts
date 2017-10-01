import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'form-builder-reactive-form',
  templateUrl: './form-builder-reactive-form.component.html',
  styleUrls: ['./form-builder-reactive-form.component.css']
})
export class FormBuilderReactiveFormComponent {
  form;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }
}


// this is the old version of form scema:

// form = new FormGroup({

//  name: new FormControl('', Validators.required),

//  contact: new FormGroup({
//    email: new FormControl(),
//    phone: new FormControl()
//  }),

//  topics: new FormArray([])

// });
