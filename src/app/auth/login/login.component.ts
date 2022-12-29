import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private authService: AuthService){}

  ngOnInit(): void {}
  
  signIn(): void {
    const credentials = this.loginForm.value;
    this.authService.logIn(credentials);
  }

  updateEmail(): void {
    const control = this.loginForm.get('email') as FormControl;
    control.setValue('nuevoValor');
  }
  
}
