import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth/auth.service'; // Importa el servicio de autenticación
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;

  loginForm = this.validatorForm.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  constructor(
    private validatorForm: FormBuilder,
    private authService: AuthService,
    private translate: TranslateService
  ) {}

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulario enviado', this.loginForm.value);

      this.authService.login(this.loginForm.value).subscribe(
        response => {
          console.log('Login successful:', response);
        },
        error => {
          console.error('Login error:', error);
        }
      );
    } else {
      console.log('Formulario no válido');
    }
  }

  getErrorMessage(controlName: string) {
    const control = this.loginForm.get(controlName);
    const messages: { [key: string]: string } = {
      required: this.translate.instant('errors.required'),
      email: this.translate.instant('errors.invalidEmail'),
      minlength: this.translate.instant('errors.minLength'),
      pattern: this.translate.instant('errors.pattern')
    };
    if (control && control.errors) {
      const errorKey = Object.keys(control.errors).find(
        key => control.errors![key]
      );
      if (errorKey) {
        return messages[errorKey] || '';
      }
    }
    return '';
  }
}
