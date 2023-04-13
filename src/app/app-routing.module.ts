import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { EmployerDashboardComponent } from './components/employer-dashboard/employer-dashboard.component';
import { CandidateDashboardComponent } from './components/candidate-dashboard/candidate-dashboard.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'employer-dashboard', component: EmployerDashboardComponent },
  { path: 'candidate-dashboard', component: CandidateDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
