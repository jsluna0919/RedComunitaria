import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonComponent } from '../button/button';


@Component({
  selector: 'app-loggin',
  standalone: true,
  templateUrl: './loggin.html',
  styleUrls: ['./loggin.css'],
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent]
})
export class LogginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
