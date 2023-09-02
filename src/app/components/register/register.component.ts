import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  username!: string;
  password!: string;
  email!: string;
  loginError = false;

  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit() {
    this.loginService.register(this.username, this.password, this.email).subscribe(
      response => {
        console.log('Registro successful!');
        this.router.navigate(['/login']);
      },
      error => {
        console.log('Registro error:', error);
        // Mostrar un mensaje de error al usuario
        this.loginError = true;
      }
    );
  }

}
