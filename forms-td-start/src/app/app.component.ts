import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('Registerform') registerform: NgForm;
  // @ViewChild('_pet') pet: ElementRef;
  defaultQ = 'pet';
  public answer = '';

  ngOnInit() {}

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
