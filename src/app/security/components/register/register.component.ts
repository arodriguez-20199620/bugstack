import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private translate: TranslateService
  ) {}

  registerForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required]]
  });

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Formulario enviado', this.registerForm.value);

      this.authService.signup(this.registerForm.value).subscribe(
        response => {
          console.log('Registro exitoso:', response);
        },
        error => {
          console.error('Error en el registro:', error);
        }
      );
    } else {
      console.log('Formulario no válido');
    }
  }

  getErrorMessage(controlName: string) {
    const control = this.registerForm.get(controlName);
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
