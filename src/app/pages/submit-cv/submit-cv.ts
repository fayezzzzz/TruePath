import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TalentService } from '../../services/talent.service';
import { ToastService } from '../../services/toast.service';
import { HiringRequirement } from '../../models/talent.models';

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
  requirementForm!: FormGroup;

  // File Upload State for Job Description / Requirement Specification
  selectedFile = signal<File | null>(null);
  fileName = signal<string>('');
  fileSize = signal<string>('');
  isDragging = signal<boolean>(false);
  isUploading = signal<boolean>(false);
  uploadProgress = signal<number>(0);

  // Suggested Key Skills / Competencies
  availableSkills = [
    'Executive Leadership', 'HRBP & Talent Strategy', 'Emiratisation Compliance',
    'Total Rewards & Compensation', 'Talent Acquisition Scaling', 'UAE Labour Law',
    'C-Suite Search', 'Engineering Management', 'Distributed Systems', 'Cloud & DevOps',
    'Financial Governance', 'HRIS / Workday / SAP', 'Performance Frameworks'
  ];
  selectedSkills = signal<string[]>(['Executive Leadership', 'HRBP & Talent Strategy']);
  newSkillInput = '';

  // Submission Status / Success Modal
  submissionSuccess = signal<HiringRequirement | null>(null);

  ngOnInit() {
    this.initForm();
    
    // Check if routed with a specific role
    this.route.queryParams.subscribe(params => {
      if (params['role']) {
        this.requirementForm.patchValue({
          roleTitle: params['role']
        });
      }
      if (params['discipline']) {
        this.requirementForm.patchValue({
          discipline: params['discipline']
        });
      }
    });
  }

  private initForm() {
    this.requirementForm = this.fb.group({
      // Step 1: Company Details
      companyName: ['', [Validators.required, Validators.minLength(2)]],
      contactName: ['', [Validators.required, Validators.minLength(3)]],
      workEmail: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(8)]],
      companyLocation: ['Dubai, UAE', [Validators.required]],
      industry: ['Technology & Software', [Validators.required]],
      companySize: ['50-250 employees', [Validators.required]],

      // Step 2: Role & Hiring Specifications
      roleTitle: ['', [Validators.required, Validators.minLength(3)]],
      discipline: ['People & HR', [Validators.required]],
      headcount: ['1 Position', [Validators.required]],
      seniorityLevel: ['Senior / Lead', [Validators.required]],
      workModel: ['Hybrid', [Validators.required]],
      employmentType: ['Permanent Retained Search', [Validators.required]],
      salaryBudget: ['AED 35,000 - 55,000 / month', [Validators.required]],
      timeframe: ['Within 30 Days', [Validators.required]],

      // Step 3: Job Spec & Additional Criteria
      roleOverview: [''],
      isConfidential: [false],
      consentTerms: [true, [Validators.requiredTrue]]
    });
  }

  // File handling for Job Spec document
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
    const allowedExtensions = ['pdf', 'doc', 'docx', 'txt'];
    const fileExt = file.name.split('.').pop()?.toLowerCase();

    if (!fileExt || !allowedExtensions.includes(fileExt)) {
      this.toastService.error('Invalid File Type', 'Please upload your Job Description / Mandate Brief in PDF, DOC, or DOCX format.');
      return;
    }

    if (file.size > 15 * 1024 * 1024) {
      this.toastService.error('File Too Large', 'Maximum file size allowed is 15MB.');
      return;
    }

    this.selectedFile.set(file);
    this.fileName.set(file.name);
    this.fileSize.set((file.size / (1024 * 1024)).toFixed(2) + ' MB');

    this.isUploading.set(true);
    this.uploadProgress.set(25);

    const timer = setInterval(() => {
      this.uploadProgress.update(p => {
        if (p >= 100) {
          clearInterval(timer);
          this.isUploading.set(false);
          this.toastService.info('Job Spec Attached', 'Job description document indexed for practice search calibration.');
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

  // Skills tags
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

  // Submission handler
  onSubmitRequirement() {
    if (this.requirementForm.invalid) {
      this.requirementForm.markAllAsTouched();
      this.toastService.warning('Incomplete Requirement', 'Please fill in all required company and mandate fields.');
      return;
    }

    const formVal = this.requirementForm.value;

    const result = this.talentService.submitHiringRequirement({
      companyName: formVal.companyName,
      contactName: formVal.contactName,
      workEmail: formVal.workEmail,
      phone: formVal.phone,
      companyLocation: formVal.companyLocation,
      industry: formVal.industry,
      companySize: formVal.companySize,
      roleTitle: formVal.roleTitle,
      discipline: formVal.discipline,
      headcount: formVal.headcount,
      seniorityLevel: formVal.seniorityLevel,
      workModel: formVal.workModel,
      employmentType: formVal.employmentType,
      salaryBudget: formVal.salaryBudget,
      timeframe: formVal.timeframe,
      jdFileName: this.fileName() || undefined,
      jdFileSize: this.fileSize() || undefined,
      keySkills: this.selectedSkills(),
      roleOverview: formVal.roleOverview,
      isConfidential: !!formVal.isConfidential
    });

    this.submissionSuccess.set(result);
    this.toastService.success('Hiring Requirement Logged!', `Mandate reference code: ${result.referenceCode}`);
  }

  // For backward compatibility template bindings if any
  onSubmitApplication() {
    this.onSubmitRequirement();
  }

  closeSuccessModal() {
    this.submissionSuccess.set(null);
    this.requirementForm.reset({
      companyLocation: 'Dubai, UAE',
      industry: 'Technology & Software',
      companySize: '50-250 employees',
      discipline: 'People & HR',
      headcount: '1 Position',
      seniorityLevel: 'Senior / Lead',
      workModel: 'Hybrid',
      employmentType: 'Permanent Retained Search',
      salaryBudget: 'AED 35,000 - 55,000 / month',
      timeframe: 'Within 30 Days',
      isConfidential: false,
      consentTerms: true
    });
    this.removeFile();
  }
}
