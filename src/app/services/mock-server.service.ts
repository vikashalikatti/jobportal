import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockServerService {
  private jobs: any[] = [];
  private appliedJobs: number[] = [];

  constructor() {}

  postJob(job: any): void {
    const newJob = { ...job, id: this.jobs.length + 1 };
    this.jobs.push(newJob);
  }

  getPostedJobs(): any[] {
    return this.jobs;
  }

  getAvailableJobs(): any[] {
    return this.jobs.filter(job => !this.appliedJobs.includes(job.id));
  }

  applyForJob(jobId: number): void {
    if (!this.appliedJobs.includes(jobId)) {
      this.appliedJobs.push(jobId);
    }
  }

  getAppliedJobs(): any[] {
    return this.jobs.filter(job => this.appliedJobs.includes(job.id));
  }
}
