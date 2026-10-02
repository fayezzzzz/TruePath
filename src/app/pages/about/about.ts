import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  readonly leadershipTeam = signal([
    {
      name: 'Victoria Hawthorne',
      role: 'Managing Partner & Co-Founder',
      practice: 'Executive & C-Suite Advisory',
      bio: 'Former Tech Exec Sourcer at Tier-1 VC with 16+ years placing CEOs, CTOs and Board Directors across Silicon Valley and London.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Julian Vance, Ph.D.',
      role: 'Managing Partner & Head of Technical Practice',
      practice: 'AI, Distributed Systems & Cloud',
      bio: 'Ex-Distributed Systems Architect turned technical headhunter. Leads technical evaluation council and engineering pod matching.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Amara Chen',
      role: 'Partner & Head of Embedded RPO',
      practice: 'High-Growth Tech Scaling',
      bio: 'Built international recruitment engines for 3 tech unicorns, overseeing 1,500+ engineering and product hires worldwide.',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Marcus Sterling',
      role: 'Partner, EMEA & APAC Expansion',
      practice: 'Cross-Border & Fintech Search',
      bio: 'Specialist in cross-border executive transitions, regulatory banking compliance, and London-Singapore-Dubai talent corridors.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80',
      linkedin: 'https://linkedin.com'
    }
  ]);

  readonly coreValues = signal([
    {
      title: 'Precision Over Volume',
      desc: 'We never flood inboxes with uncalibrated resumes. We deliver 3-5 deeply vetted candidates who exceed the bar.',
      icon: 'target'
    },
    {
      title: 'Absolute Discretion',
      desc: 'Confidentiality is our bedrock. Executive careers and sensitive corporate hiring mandates are safeguarded with utmost care.',
      icon: 'shield-check'
    },
    {
      title: 'Technical Rigor',
      desc: 'Our vetting is led by domain experts who understand the nuances of distributed systems, AI architectures, and unit economics.',
      icon: 'cpu'
    },
    {
      title: 'Inclusive Leadership',
      desc: 'We actively champion diverse candidate pipelines, ensuring every executive slate reflects global perspectives.',
      icon: 'users'
    }
  ]);
}
