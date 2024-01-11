import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IUserRegister } from '../shared/interfaces/IUserRegister';
import { PasswordsMatchValidator } from '../shared/validators/password_match_validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit  {

  registerForm!:FormGroup;
  isSubmitted = false;

  returnUrl = '';
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit():void{
    this.registerForm = this.formBuilder.group({
      fname: ['', [Validators.required, Validators.minLength(5)]],
      lname: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(10)]]
    },{
      validators: PasswordsMatchValidator('password','confirmPassword')
    });

    this.returnUrl= this.activatedRoute.snapshot.queryParams.returnUrl;
    console.log("retuenUrl",this.returnUrl)
  }


  get fc() {
    return this.registerForm.controls;
  }

  submit(){
   
    this.isSubmitted = true;
    if(this.registerForm.invalid) return;
    console.log("inside register")
    const fv= this.registerForm.value;
    const user :IUserRegister = {
      fname: fv.fname,
      lname: fv.lname,
      email: fv.email,
      password: fv.password,
      phone:fv.phone,
      birthDate:fv.birthDate,
      gender:fv.gender,
      imageUrl:fv.imageUrl,
      confirmPassword: fv.confirmPassword,
      address: fv.address
    };

    this.userService.register(user).subscribe(_ => {
      this.router.navigateByUrl(this.returnUrl);
    })
  }


  
}
