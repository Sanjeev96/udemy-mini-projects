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
  defaultQ = 'teacher';
  defaultGender = 'Male';
  public answer = '';
  genders = ['Male', 'Female', 'Other'];
  user = {
    username: '',
    email: '',
    secretQ: '',
    secretA: '',
    gender: ''
  };

  public submitted = false;

  ngOnInit() {}

  suggestUserName() {
    const suggestedName = [
      'Superuser',
      'user123',
      'Dragonslay3er',
      'c3pO',
      '123abc'
    ];
    const randomUsername =
      suggestedName[Math.floor(Math.random() * suggestedName.length)];
    console.log(this.suggestUserName);
    // this.registerform.setValue({ // this approach means you must set a value for each item in the form...NOT THE BEST APPROACH
    //   UserData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   UserSecret: {
    //     secrect: 'pet',
    //     qA: '',
    //     gender: 'Male'
    //   }
    // });
    this.registerform.form.patchValue({
      // 'patchValue overrides parts of the form'
      UserData: {
        username: randomUsername
        
      }
    });
  }

  // EXAMPLE 1 PASSING FORM AS A PARAMATER
  // onSubmit(Registerform: NgForm) {// instead of ElementRef (display html in console), ngform will return object with the entered values
  //   console.log(Registerform);
  //}

  //EXAMPLE 2 USING VIEWCHILD
  onSubmit() {
    this.submitted = true;
    this.user.username = this.registerform.value.UserData.username;
    this.user.email = this.registerform.value.UserData.email;
    this.user.secretQ = this.registerform.value.UserSecret.secretQ;
    this.user.secretA = this.registerform.value.UserSecret.secretA;
    this.user.gender = this.registerform.value.gender;

    this.registerform.resetForm();

  }
}
