import { Component, ElementRef, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('Registerform') registerform: NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // EXAMPLE 1 PASSING FORM AS A PARAMATER
  // onSubmit(Registerform: NgForm) {// instead of ElementRef (display html in console), ngform will return object with the entered values
  //   console.log(Registerform);
  //}

  //EXAMPLE 2 USING VIEWCHILD
  onSubmit() {
    console.log(this.registerform);
  }
}
