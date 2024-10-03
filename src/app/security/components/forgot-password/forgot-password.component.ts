import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  hide: boolean = true;
  hideConfirm: boolean = true;
  isEditable: boolean = true;
  stepperOrientation: Observable<StepperOrientation>;

  errorMessages = {
    required: 'This field is required.',
    invalidEmail: 'Please enter a valid email address.',
    minLength: 'Password must be at least 8 characters long.',
    pattern: 'Please enter only numbers',
    mismatch: 'Passwords do not match.',
  };

  emailForm = this.validatorForm.group({
    email: ['', [Validators.required, Validators.email]]
  });

  passwordChangeForm = this.validatorForm.group({
    email: [{ value: '', disabled: true }, [Validators.required, Validators.email]],
    verificationCode: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required]]
  }, { validator: this.passwordMatchValidator });


  constructor(private validatorForm: FormBuilder, private router: Router, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
 ? null : { mismatch: true };
  }

  onBack = () => this.router.navigate(['/auth/login']);

  onSubmit() {
    if (this.emailForm.valid) {
      const email = this.emailForm.get('email')?.value;
      this.passwordChangeForm.patchValue({ email: email });
    }
  }

  onSubmit2() {
    if (this.passwordChangeForm.valid) {
      console.log('Form submitted:', this.passwordChangeForm.value);
    }
  }

  getErrorMessage(controlName: string) {
    const control = this.emailForm.get(controlName) || this.passwordChangeForm.get(controlName);
    const messages: { [key: string]: string } = {
      required: this.errorMessages.required,
      email: this.errorMessages.invalidEmail,
      minlength: this.errorMessages.minLength,
      pattern: this.errorMessages.pattern,
      mismatch: this.errorMessages.mismatch,
    };
    if (control && control.errors) {
      const errorKey = Object.keys(control.errors).find(key => control.errors![key]);
      if (errorKey) {
        return messages[errorKey] || '';
      }
    }
    return '';
  }

}
