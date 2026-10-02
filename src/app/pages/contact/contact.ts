import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TalentService } from '../../services/talent.service';
import { ToastService } from '../../services/toast.service';
import { ConsultationRequest } from '../../models/talent.models';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent implements OnInit, OnDestroy {
  private readonly fb = inject(FormBuilder);
  readonly talentService = inject(TalentService);
  readonly toastService = inject(ToastService);

  contactForm!: FormGroup;
  submittedConsultation = signal<ConsultationRequest | null>(null);

  // Active FAQ Accordion Index
  activeFaqIndex = signal<number | null>(0);

  // Global Offices with dynamic timezones
  readonly offices = signal([
    {
      city: 'Dubai (Global HQ)',
      country: 'United Arab Emirates',
      address: 'Meydan Garndstand, 6th floor, Meydan Road',
      timezone: 'Asia/Dubai',
      phone: '+971 52 673 5518',
      email: 'truepathventures.ae@gmail.com',
      currentTime: ''
    },
    {
      city: 'Abu Dhabi',
      country: 'United Arab Emirates',
      address: 'ADGM Square, Al Maryah Island',
      timezone: 'Asia/Dubai',
      phone: '+971 2 645 8890',
      email: 'uae@truepathventures.ae',
      currentTime: ''
    },
    {
      city: 'Riyadh',
      country: 'Saudi Arabia',
      address: 'King Fahd Road, Al Olaya District',
      timezone: 'Asia/Riyadh',
      phone: '+966 11 482 1200',
      email: 'ksa@truepathventures.ae',
      currentTime: ''
    },
    {
      city: 'London',
      country: 'United Kingdom',
      address: '100 Bishopsgate, 22nd Floor',
      timezone: 'Europe/London',
      phone: '+44 20 7946 0991',
      email: 'uk@truepathventures.ae',
      currentTime: ''
    }
  ]);

  // FAQs
  readonly faqs = [
    {
      question: 'How quickly can TruePath present a calibrated shortlist of HR and executive candidates?',
      answer: 'For specialized HR and mid-to-senior management searches, we deliver our first shortlist of 3-5 pre-interviewed and backchannel-vetted candidates within 5-10 business days. For confidential C-Suite and executive leadership mandates, our complete regional market map and shortlist are delivered within 14-21 business days.'
    },
    {
      question: 'What is TruePath\'s placement warranty and replacement guarantee?',
      answer: 'All executive placements and leadership searches are backed by our comprehensive 12-month placement guarantee. Our specialized contingency and interim placements include a complete 90-day warranty. In the rare event a hire departs or does not meet agreed performance benchmarks, we replace the role at zero additional fee.'
    },
    {
      question: 'How does TruePath HR Solutions support UAE and GCC recruitment regulations?',
      answer: 'Headquartered in Dubai at Meydan Garndstand, TruePath ventures L.L.C-FZ is fully licensed and versed in UAE Labor Law, Emiratisation policies (MOHRE), executive visa structuring, free zone compliance (DIFC, ADGM, Meydan FZ), and regional GCC talent mobility.'
    },
    {
      question: 'Are candidate CV submissions and employer hiring mandates kept confidential?',
      answer: 'Yes, 100%. We adhere to strict executive non-disclosure protocols. We never share your resume, identity, or current company details with prospective employers without your explicit prior discussion and consent for that specific role.'
    },
    {
      question: 'Do you assist with international talent relocation to Dubai & the Middle East?',
      answer: 'Yes. TruePath facilitates international executive headhunting, Golden Visa advisory, relocation benchmarking, and cross-border compensation alignment for candidates moving to the UAE, Saudi Arabia, and greater MENA region.'
    }
  ];

  private clockInterval: any;

  ngOnInit() {
    this.initForm();
    this.updateOfficeTimes();
    this.clockInterval = setInterval(() => this.updateOfficeTimes(), 1000);
  }

  ngOnDestroy() {
    if (this.clockInterval) {
      clearInterval(this.clockInterval);
    }
  }

  private initForm() {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      companyName: ['', [Validators.required]],
      workEmail: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      inquiryType: ['Hire Talent', [Validators.required]],
      rolesCount: ['3-5 Roles', [Validators.required]],
      timeframe: ['Within 30 Days', [Validators.required]],
      budgetRange: ['$150k - $300k', [Validators.required]],
      preferredContact: ['Virtual Meeting', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  updateOfficeTimes() {
    this.offices.update(list => list.map(off => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: off.timezone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }).format(new Date());
        return { ...off, currentTime: timeStr };
      } catch (e) {
        return off;
      }
    }));
  }

  toggleFaq(index: number) {
    this.activeFaqIndex.update(cur => cur === index ? null : index);
  }

  onSubmitConsultation() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.toastService.warning('Please complete all required fields.', 'Ensure your work email and hiring requirements are provided.');
      return;
    }

    const val = this.contactForm.value;
    const req = this.talentService.submitConsultationRequest({
      fullName: val.fullName,
      companyName: val.companyName,
      workEmail: val.workEmail,
      phone: val.phone,
      inquiryType: val.inquiryType,
      rolesCount: val.rolesCount,
      timeframe: val.timeframe,
      budgetRange: val.budgetRange,
      preferredContact: val.preferredContact,
      message: val.message
    });

    this.submittedConsultation.set(req);
    this.toastService.success('Consultation Request Received!', 'A Managing Partner will reach out within 4 business hours.');
  }

  closeModal() {
    this.submittedConsultation.set(null);
    this.contactForm.reset({
      inquiryType: 'Hire Talent',
      rolesCount: '3-5 Roles',
      timeframe: 'Within 30 Days',
      budgetRange: '$150k - $300k',
      preferredContact: 'Virtual Meeting'
    });
  }
}
