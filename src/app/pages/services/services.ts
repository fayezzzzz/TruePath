import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

export interface CorporateService {
  id: string;
  name: string;
  badge: string;
  icon: string;
  description: string;
  bgImage: string;
}

@Component({
  selector: 'app-services',
  imports: [CommonModule, RouterModule],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class ServicesComponent {
  private readonly router = inject(Router);

  readonly services = signal<CorporateService[]>([
    {
      id: 'staffing',
      name: 'Staffing Solutions',
      badge: 'STAFFING',
      icon: 'users',
      description: 'Flexible temporary and contract workforce solutions for seasonal peaks, project surges, and interim staffing with full UAE payroll and visa sponsorship management.',
      bgImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'permanent-recruitment',
      name: 'Permanent Recruitment',
      badge: 'PERMANENT RECRUITMENT',
      icon: 'user-check',
      description: 'Direct-hire contingency recruitment delivering pre-vetted specialists and department leaders who match your corporate culture, technical standards, and long-term vision.',
      bgImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'executive-search',
      name: 'Executive Search',
      badge: 'EXECUTIVE SEARCH',
      icon: 'crown',
      description: 'Confidential retained headhunting for transformational C-Suite, Board of Directors, Managing Directors, and senior leadership appointments across the GCC.',
      bgImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'hr-advisory',
      name: 'HR Advisory & Transformation',
      badge: 'HR ADVISORY & TRANSFORMATION',
      icon: 'trending-up',
      description: 'Strategic HR consulting covering organization design, compensation & benefits benchmarking, job grading, UAE Labour Law compliance, and performance management systems.',
      bgImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'mass-recruitment',
      name: 'Mass Recruitment',
      badge: 'MASS RECRUITMENT',
      icon: 'briefcase',
      description: 'Turnkey high-volume hiring campaigns for retail chain rollouts, hospitality openings, logistics hubs, and construction mega-projects with international candidate sourcing.',
      bgImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'outsourcing',
      name: 'HR Outsourcing',
      badge: 'OUTSOURCING',
      icon: 'shield',
      description: 'We help businesses reduce administrative burdens and focus on their core operations by efficiently managing their workforce, assets, and essential resources.',
      bgImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'rpo',
      name: 'Recruitment Process Outsourcing (RPO)',
      badge: 'RPO',
      icon: 'layers',
      description: 'Dedicated talent acquisition pods embedded directly within your enterprise infrastructure to significantly lower cost-per-hire and accelerate candidate delivery.',
      bgImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80'
    }
  ]);

  enquire(service: CorporateService) {
    this.router.navigate(['/contact'], {
      queryParams: {
        role: `Service Inquiry - ${service.name}`
      }
    });
  }
}
