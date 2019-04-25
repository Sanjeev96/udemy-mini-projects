import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female', 'other'];
  registerForm: FormGroup;
  forbiddenUsernames = ['andy', 'james', 'luke'];
  submitted = false;
  ngOnInit() {
    this.registerForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this)
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]) // Array of Validators
      }),
      gender: new FormControl('male', Validators.required),
      hobbies: new FormArray([])
    });
  }

  onAddHobbies() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.registerForm.get('hobbies')).push(control);
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm);
  }

  // THIS A IS CUSTOM VALIDATOR THAT HAS BEEN MADE, pass this into the username formControl property      CUSTOM VALIDATION
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) { // -1 IS INTERPRETED AS TRUE HENCE CHECKING IF ! THAN -1
      return { nameIsForbidden: true };
    }
    return null;
  }
}
