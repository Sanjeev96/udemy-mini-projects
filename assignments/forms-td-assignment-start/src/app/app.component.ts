import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('subForm') subForm: NgForm;
  //public subTypes = ['Basic', 'Advanced', 'Pro']; if i created an ng for loop but setting default proves difficult this way
  public defaultSub = 'Advanced';
  public submitted = false;
  public user = {
    email: '',
    subTypes: '',
    password: ''
  };

  onSubmit() {
    this.submitted = true;
    console.log(this.subForm);

    (this.user.email = this.subForm.form.value.UserData.email),
      (this.user.subTypes = this.subForm.form.value.UserData.subTypes),
      (this.user.password = this.subForm.form.value.UserData.password);
  }
}
