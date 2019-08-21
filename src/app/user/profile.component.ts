import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from "../common/toastr.service";

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em { float:right; color: #E05C65; padding-left: 10px; }
    .error input { background: #E3C3C5; }
    .error ::-webkit-input-placeholder  { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;
  
  constructor(private authService: AuthService, private router:Router, @Inject(TOASTR_TOKEN) private toastr: Toastr){}

  ngOnInit(){
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  saveProfile(formsValue){
    if(this.profileForm.valid) {
      this.authService.updateCurrentUser(formsValue.firstName, formsValue.lastName);
      this.toastr.warning('Updating profile...');
      setTimeout( () => {
        this.toastr.success('Profile Saved')
      }, 5000 );
    }
  }

  cancel(){
    this.router.navigate(['events']);
  } 
  
  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName(){
    return this.lastName.valid || this.lastName.untouched 
  }
}