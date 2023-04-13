import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MockServerService } from 'src/app/services/mock-server.service';

@Component({
  selector: 'app-employer-dashboard',
  templateUrl: './employer-dashboard.component.html',
  styleUrls: ['./employer-dashboard.component.scss']
})
export class EmployerDashboardComponent implements OnInit {
  postJobForm: FormGroup;
  postedJobs: any[] = [];

  constructor(private fb: FormBuilder, private mockServerService: MockServerService) {
    this.postJobForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      requirements: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.postedJobs = this.mockServerService.getPostedJobs();
  }

  onSubmit(): void {
    if (this.postJobForm.valid) {
      this.mockServerService.postJob(this.postJobForm.value);
      this.postJobForm.reset();
      this.postedJobs = this.mockServerService.getPostedJobs();
    }
  }
}
