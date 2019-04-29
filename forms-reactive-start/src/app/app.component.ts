import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';
import { resolve } from 'url';

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
        email: new FormControl(
          null,
          [
            //CAN ADD AN ARRAY OF VALIDATORS LIKE SO
            Validators.required,
            Validators.email
          ],
          this.forbiddenEMails // dont need to do bond.this because foriddenEmails not called in html only validation through email: new FormControl
        ) // custom validator) 3rd arg is for async validators
      }),
      gender: new FormControl('male', Validators.required),
      hobbies: new FormArray([])
    });
    this.registerForm.valueChanges.subscribe(value => {
      console.log('values', value);
    });

    this.registerForm.statusChanges.subscribe(status => {
      console.log('status', status);
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

  //CUSTOM VALIDATION
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      // -1 IS INTERPRETED AS TRUE HENCE CHECKING IF ! THAN -1
      return { nameIsForbidden: true };
    }
    return null;
  }

  //CUMSTOM VALIDATOR - ASYNC can wait for a response before returning invlaid or true
  forbiddenEMails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(res => {
      //set time is used to mimic a action like waiting on getting data from a service
      setTimeout(() => {
        if (control.value === 'test@gmail.com') {
          res({ emailIsForbidden: true });
        } else {
          res(null);
        }
      }, 1500);
    });
    return promise;
  }
}
