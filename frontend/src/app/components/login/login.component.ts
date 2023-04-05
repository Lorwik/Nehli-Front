import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;
  loginError = false;

  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit() {
    this.loginService.login(this.username, this.password).subscribe(
      response => {
        console.log('Login successful!');
        this.router.navigate(['/browser']);
      },
      error => {
        console.log('Login error:', error);
        // Mostrar un mensaje de error al usuario
        this.loginError = true;
      }
    );
  }
}
