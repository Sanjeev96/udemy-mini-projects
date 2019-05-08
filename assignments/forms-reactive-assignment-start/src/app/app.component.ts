import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projForm: FormGroup;
  projStatuses = ['Stable', 'Critical', 'Finished'];
  //forbiddenNamesList = ['test', 'test2', 'test3'];
  submitted = false;
  public info = {
    projectName: '',
    projectStatus: '',
    email: ''
  };

  ngOnInit() {
    this.projForm = new FormGroup({
      projName: new FormControl(
        null,
        Validators.required,
        this.forbiddenProjName
      ),
      projStatus: new FormControl('Stable', Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email])
    });
    this.projForm.patchValue({
      projName: 'Project1'
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.projForm);
    this.info.projectName = this.projForm.value.projName;
    this.info.projectStatus = this.projForm.value.projStatus;
    this.info.email = this.projForm.value.email;
  }

  // //CUSTOM VALIDATOR- NON ASYC - best used when data not coming from a sever
  // forbiddenProjName(control: FormControl) {
  //   if (this.forbiddenNamesList.indexOf(control.value) !== -1) {
  //     return { projNameIsForbidden: true };
  //   }
  //   return null;
  // }

  //CUMSTOM VALIDATOR - ASYNC can wait for a response before returning invlaid or true -- 99% of the time this will be used
  forbiddenProjName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(res => {
      setTimeout(() => {
        //set time is used to mimic a action like waiting on getting data from a service
        if (control.value === 'test' || control.value === 'example' || control.value === 'project') {
          res({ projNameIsForbidden: true });
        } else {
          res(null);
        }
      }, 1000);
    });
    return promise;
  }
}
