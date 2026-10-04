import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TalentService } from '../../services/talent.service';
import { JobPosition } from '../../models/talent.models';

@Component({
  selector: 'app-jobs',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './jobs.html',
  styleUrl: './jobs.scss'
})
export class JobsComponent {
  readonly talentService = inject(TalentService);
  private readonly router = inject(Router);

  // Selected discipline role for modal
  readonly selectedJob = signal<JobPosition | null>(null);

  // Filter bindings
  query = '';
  department = '';
  workType = '';
  experienceLevel = '';

  constructor() {
    // sync initial values from service filter
    const current = this.talentService.searchFilter();
    this.query = current.query;
    this.department = current.department;
    this.workType = current.workType;
    this.experienceLevel = current.experienceLevel;
  }

  onFilterChange() {
    this.talentService.updateSearchFilter({
      query: this.query,
      department: this.department,
      workType: this.workType,
      experienceLevel: this.experienceLevel
    });
  }

  resetFilters() {
    this.query = '';
    this.department = '';
    this.workType = '';
    this.experienceLevel = '';
    this.talentService.resetSearchFilter();
  }

  openJobDetails(job: JobPosition) {
    this.selectedJob.set(job);
  }

  closeJobDetails() {
    this.selectedJob.set(null);
  }

  hireForRole(job: JobPosition) {
    this.closeJobDetails();
    this.router.navigate(['/contact'], { queryParams: { role: job.title, discipline: job.department } });
  }

  // Alias for backwards compatibility
  applyForJob(job: JobPosition) {
    this.hireForRole(job);
  }
}
