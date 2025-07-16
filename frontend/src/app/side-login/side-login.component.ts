import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-side-login',
  imports: [RouterModule, FormsModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './side-login.component.html',
  styleUrls: ['./side-login.component.scss'],
})
export class SideLoginComponent {
constructor( private router: Router) {}

  form = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    // console.log(this.form.value);
    this.router.navigate(['/']);
  }
}
