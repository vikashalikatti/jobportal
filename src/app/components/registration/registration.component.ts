import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      role: ['', [Validators.required]],
    }, { validator: this.checkPasswords });
  }

  ngOnInit(): void {
  }

  checkPasswords(group: FormGroup) {
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;

    return password === confirmPassword ? null : { notSame: true };
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      // Add your registration logic here.
      // If the registration is successful, redirect to the appropriate dashboard based on the user's role.
      const userRole = this.registrationForm.get('role').value;
      if (userRole === 'employer') {
        this.router.navigate(['/employer-dashboard']);
      } else {
        this.router.navigate(['/candidate-dashboard']);
      }
    }
  }
}
