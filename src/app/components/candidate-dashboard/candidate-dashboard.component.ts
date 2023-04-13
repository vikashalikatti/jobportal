import { Component, OnInit } from '@angular/core';
import { MockServerService } from 'src/app/services/mock-server.service';

@Component({
  selector: 'app-candidate-dashboard',
  templateUrl: './candidate-dashboard.component.html',
  styleUrls: ['./candidate-dashboard.component.scss']
})
export class CandidateDashboardComponent implements OnInit {
  availableJobs: any[] = [];
  appliedJobs: any[] = [];

  constructor(private mockServerService: MockServerService) { }

  ngOnInit(): void {
    this.availableJobs = this.mockServerService.getAvailableJobs();
    this.appliedJobs = this.mockServerService.getAppliedJobs();
  }

  applyForJob(jobId: number): void {
    this.mockServerService.applyForJob(jobId);
    this.availableJobs = this.mockServerService.getAvailableJobs();
    this.appliedJobs = this.mockServerService.getAppliedJobs();
  }
}
