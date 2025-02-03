import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  constructor(private _FormBuilder: FormBuilder, private _AuthService: AuthService, private _ToastrService: ToastrService) { }
  isLoading: boolean = false;
  passwordShow: boolean = false;


  signupForm: FormGroup = this._FormBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]],
  });


  handelSignup(form: FormGroup): void {
    this.isLoading = true;

    this._AuthService.signUp(form.value).subscribe({
      next: (response) => {
        console.log(response.message);
        this._ToastrService.success(response.message);
        // this._Router.navigate(['/signin']);
        // this.isLoading=true;

      },
      error: (err) => {
        this._ToastrService.error(err.statusText);
        // this.isLoading=false;
        console.log(err);



      }
    })
  }

}
