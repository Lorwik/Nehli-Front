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
  errorMessage: string | undefined;

  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit() {
    this.loginService.login(this.username, this.password).subscribe({
      next: (response) => {
        // Si la respuesta tiene la propiedad 'data' (porque en el backend usas res.send({ data }))
        if (response.data) {
          //console.log(response.data);
          this.router.navigate(['/browser']);
        } else {
          //console.log('Login error:', response);
          this.loginError = true;
          this.errorMessage = "El usuario o la contraseña son incorrectos.";
        }
      },
      error: (error) => {
        //console.log('Login error:', error);
        this.loginError = true;
        this.errorMessage = "Error en la solicitud al servidor.";
      }
    });
  }

}
