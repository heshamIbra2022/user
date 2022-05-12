import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Iuser } from 'src/app/Models/iuser';
import { UserAuthenticationService } from 'src/app/ٍServices/user-authentication.service';
import { passwordMatchValidator } from '../../custom validator/PasswordValidator';
import { forbiddenNameValidator } from '../../custom validator/UserNameValidator';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.scss']
})
export class UserregisterComponent implements OnInit {
  userRegisterFormGroup: FormGroup;
  constructor(private fb: FormBuilder,
    private userAuthAPIService: UserAuthenticationService,
    ) { 
    this.userRegisterFormGroup = fb.group({
     // name: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/(admin)|(user)/)]],
      name: ['', [Validators.required, Validators.minLength(3),forbiddenNameValidator]],
      email: [''],
      mobileNo: [''],
     
      password: [''],
      confirmPassword: [''],
     
    }, { validators: passwordMatchValidator });
  }

  
  ngOnInit(): void {
  }

  get name() {
    return this.userRegisterFormGroup.controls['name'];
  }

  get mobileNoArr() {
    return this.userRegisterFormGroup.controls['mobileNo'] ;
  }

  get email() {
    return this.userRegisterFormGroup.controls['email'];
  }

  get password() {
    return this.userRegisterFormGroup.controls['password'];
  }

  get confirmPassword() {
    return this.userRegisterFormGroup.controls['confirmPassword'];
  }

  
  

  register() {
    // Call API, send this.userRegisterFormGroup.value;
var user:Iuser={name:this.name.value,
  password:this.password.value,
  mobileNo:this.mobileNoArr.value,
email:this.email.value

}

    this.userAuthAPIService.adduser(user).subscribe();
  }


}
