import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TalentService } from '../../services/talent.service';
import { ToastService } from '../../services/toast.service';
import { CandidateApplication } from '../../models/talent.models';

@Component({
  selector: 'app-submit-cv',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './submit-cv.html',
  styleUrl: './submit-cv.scss'
})
export class SubmitCvComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  readonly talentService = inject(TalentService);
  readonly toastService = inject(ToastService);
  private readonly route = inject(ActivatedRoute);

  // Form Group
  applicationForm!: FormGroup;

  // File Upload State
  selectedFile = signal<File | null>(null);
  fileName = signal<string>('');
  fileSize = signal<string>('');
  isDragging = signal<boolean>(false);
  isUploading = signal<boolean>(false);
  uploadProgress = signal<number>(0);

  // Skill Tags State
  availableSkills = [
    'TypeScript', 'Go', 'Rust', 'Python', 'React', 'Angular', 'Node.js',
    'Kubernetes', 'AWS', 'GCP', 'PostgreSQL', 'Distributed Systems',
    'LLM / Generative AI', 'MLOps', 'Product Strategy', 'Engineering Management',
    'System Architecture', 'C-Suite Leadership', 'Fintech', 'HealthTech'
  ];
  selectedSkills = signal<string[]>(['TypeScript', 'Kubernetes']);
  newSkillInput = '';

  // Submission Status / Success Modal
  submissionSuccess = signal<CandidateApplication | null>(null);

  ngOnInit() {
    this.initForm();
    
    // Check if routed with a specific role
    this.route.queryParams.subscribe(params => {
      if (params['role']) {
        this.applicationForm.patchValue({
          desiredRole: params['role']
        });
      }
    });
  }

  private initForm() {
    this.applicationForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(8)]],
      location: ['', [Validators.required]],
      currentRole: ['', [Validators.required]],
      desiredRole: ['', [Validators.required]],
      industry: ['Engineering & Cloud', [Validators.required]],
      experienceYears: [6, [Validators.required, Validators.min(0)]],
      seniorityLevel: ['Senior', [Validators.required]],
      workTypePreference: ['Remote', [Validators.required]],
      noticePeriod: ['1 Month', [Validators.required]],
      currentSalary: [''],
      expectedSalary: ['', [Validators.required]],
      linkedInUrl: [''],
      portfolioUrl: [''],
      coverNote: [''],
      consentData: [true, [Validators.requiredTrue]]
    });
  }

  // File handling
  onFileDropped(event: DragEvent) {
    event.preventDefault();
    this.isDragging.set(false);
    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      this.handleFile(event.dataTransfer.files[0]);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging.set(true);
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragging.set(false);
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.handleFile(input.files[0]);
    }
  }

  private handleFile(file: File) {
    const allowedExtensions = ['pdf', 'doc', 'docx'];
    const fileExt = file.name.split('.').pop()?.toLowerCase();

    if (!fileExt || !allowedExtensions.includes(fileExt)) {
      this.toastService.error('Invalid File Type', 'Please upload your CV in PDF, DOC, or DOCX format.');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      this.toastService.error('File Too Large', 'Maximum file size allowed is 10MB.');
      return;
    }

    this.selectedFile.set(file);
    this.fileName.set(file.name);
    this.fileSize.set((file.size / (1024 * 1024)).toFixed(2) + ' MB');

    // Simulate fast upload & AI parsing
    this.isUploading.set(true);
    this.uploadProgress.set(20);

    const timer = setInterval(() => {
      this.uploadProgress.update(p => {
        if (p >= 100) {
          clearInterval(timer);
          this.isUploading.set(false);
          this.toastService.info('CV Attached & Verified', 'Resume successfully indexed for precision matching.');
          return 100;
        }
        return p + 25;
      });
    }, 150);
  }

  removeFile() {
    this.selectedFile.set(null);
    this.fileName.set('');
    this.fileSize.set('');
    this.uploadProgress.set(0);
  }

  // Skills tag handling
  addSkill(skill: string) {
    const trimmed = skill.trim();
    if (trimmed && !this.selectedSkills().includes(trimmed)) {
      this.selectedSkills.update(s => [...s, trimmed]);
    }
    this.newSkillInput = '';
  }

  removeSkill(skill: string) {
    this.selectedSkills.update(s => s.filter(item => item !== skill));
  }

  togglePresetSkill(skill: string) {
    if (this.selectedSkills().includes(skill)) {
      this.removeSkill(skill);
    } else {
      this.addSkill(skill);
    }
  }

  // Form submission
  onSubmitApplication() {
    if (this.applicationForm.invalid) {
      this.applicationForm.markAllAsTouched();
      this.toastService.warning('Incomplete Application', 'Please fill in all mandatory fields before submitting.');
      return;
    }

    if (!this.selectedFile()) {
      this.toastService.warning('CV Required', 'Please upload your CV / Resume document (.pdf or .docx).');
      return;
    }

    const formVal = this.applicationForm.value;

    const applicationResult = this.talentService.submitCandidateApplication({
      fullName: formVal.fullName,
      email: formVal.email,
      phone: formVal.phone,
      location: formVal.location,
      currentRole: formVal.currentRole,
      desiredRole: formVal.desiredRole,
      industry: formVal.industry,
      experienceYears: Number(formVal.experienceYears),
      seniorityLevel: formVal.seniorityLevel,
      workTypePreference: formVal.workTypePreference,
      noticePeriod: formVal.noticePeriod,
      currentSalary: formVal.currentSalary || 'Confidential',
      expectedSalary: formVal.expectedSalary,
      linkedInUrl: formVal.linkedInUrl,
      portfolioUrl: formVal.portfolioUrl,
      skills: this.selectedSkills(),
      cvFileName: this.fileName(),
      cvFileSize: this.fileSize(),
      coverNote: formVal.coverNote
    });

    this.submissionSuccess.set(applicationResult);
    this.toastService.success('Application Received!', `Your reference code is ${applicationResult.referenceCode}`);
  }

  closeSuccessModal() {
    this.submissionSuccess.set(null);
    this.applicationForm.reset({
      industry: 'Engineering & Cloud',
      experienceYears: 6,
      seniorityLevel: 'Senior',
      workTypePreference: 'Remote',
      noticePeriod: '1 Month',
      consentData: true
    });
    this.removeFile();
  }
}
