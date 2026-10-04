import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface CompanyEthic {
  title: string;
  category: 'Ethics & Integrity' | 'Corporate Responsibility';
  icon: string;
  description: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {

  readonly ethics = signal<CompanyEthic[]>([
    {
      title: 'Absolute Discretion & Confidentiality',
      category: 'Ethics & Integrity',
      icon: 'shield',
      description: 'Confidentiality is our cornerstone. We safeguard corporate strategic plans, executive transitions, proprietary candidate data, and client commercial privacy with strict protocols.'
    },
    {
      title: 'Ethical Sourcing & Non-Solicitation',
      category: 'Ethics & Integrity',
      icon: 'check-circle',
      description: 'We respect our client relationships unconditionally. TruePath adheres to strict anti-poaching agreements, never soliciting talent from our active corporate partners.'
    },
    {
      title: 'Transparency & Calibration Rigor',
      category: 'Ethics & Integrity',
      icon: 'award',
      description: 'We deliver factual market compensation intelligence and honest candidate appraisals, ensuring hiring committees make well-informed, evidence-backed decisions.'
    },
    {
      title: 'Merit-Based & Diverse Leadership',
      category: 'Ethics & Integrity',
      icon: 'users',
      description: 'We champion meritocracy, equal opportunity, and diverse perspectives across our executive candidate slates, building resilient organizations.'
    },
    {
      title: 'UAE Labour Law & WPS Compliance',
      category: 'Corporate Responsibility',
      icon: 'scale',
      description: '100% adherence to UAE Ministry of Human Resources & Emiratisation (MOHRE) regulations, statutory employee welfare standards, and WPS payroll security.'
    },
    {
      title: 'Emiratisation & National Talent',
      category: 'Corporate Responsibility',
      icon: 'flag',
      description: 'We actively support UAE national workforce development and Emiratisation initiatives, placing qualified Emirati leaders across key corporate sectors.'
    },
    {
      title: 'Continuous Post-Placement Care',
      category: 'Corporate Responsibility',
      icon: 'heart',
      description: 'Our responsibility extends beyond contract signing. We conduct regular 30, 60, and 90-day post-placement reviews to ensure mutual long-term success.'
    },
    {
      title: 'Paperless & Sustainable Operations',
      category: 'Corporate Responsibility',
      icon: 'leaf',
      description: 'TruePath operates digital-first, cloud-native HR and recruitment pipelines, minimizing paper waste and streamlining corporate administrative workflows.'
    }
  ]);

  readonly managingDirector = signal({
    name: 'Sheel Shafeek',
    title: 'Founder & Managing Director',
    company: 'TruePath Ventures L.L.C',
    location: 'Dubai, United Arab Emirates',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
    quote: 'TruePath was founded with a clear vision: to elevate executive recruitment from a transactional process into a strategic, high-trust partnership for GCC enterprises.',
    bio: [
      'With extensive experience in executive search, corporate human resources, and business strategy across the UAE and GCC, Fayez leads TruePath Ventures with a focus on delivering excellence, precision, and compliance.',
      'Under the leadership, TruePath has established specialized practice divisions spanning Hospitality, IT & Telecom, Banking & Finance, Logistics, Healthcare, Retail, and Construction, serving premier conglomerates, multinational corporations, and high-growth enterprises.',
      'Committed to ethical headhunting standards, Emiratisation advancement, and long-term client relationships rooted in mutual transparency, discretion, and measurable business impact.'
    ],
    pillars: [
      { label: 'Strategic Alignment', desc: 'Matching human capital directly with enterprise commercial goals' },
      { label: 'Executive Discretion', desc: 'Safeguarding high-stakes confidential board and C-suite mandates' },
      { label: 'Regulatory Rigor', desc: 'Uncompromising compliance with UAE Labour Law & MOHRE standards' },
      { label: 'Long-Term Impact', desc: 'Focusing on multi-year executive retention and organizational growth' }
    ]
  });
}
