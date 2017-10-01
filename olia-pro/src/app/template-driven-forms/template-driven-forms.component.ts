import { Component } from '@angular/core';

@Component({
  selector: 'template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent {

  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Phone'}
  ];

  log(x) {
    console.log(x);
  }

  submit(f) {
    console.log(f);
  }

}
