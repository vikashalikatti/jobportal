import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users = [
    {
      email: 'employer@example.com',
      password: 'password',
      role: 'employer',
    },
    {
      email: 'candidate@example.com',
      password: 'password',
      role: 'candidate',
    },
  ];

  constructor() {}

  login(email: string, password: string): string | null {
    const user = this.users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      return user.role;
    } else {
      return null;
    }
  }
}
