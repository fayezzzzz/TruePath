import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TalentService } from '../../services/talent.service';

@Component({
  selector: 'app-services',
  imports: [CommonModule, RouterModule],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class ServicesComponent {
  readonly talentService = inject(TalentService);

  readonly industrySectors = signal([
    {
      name: 'AI, LLM & Cloud Infrastructure',
      icon: 'cpu',
      description: 'Distributed systems, GPU clustering, MLOps, vector search, cloud-native Kubernetes architectures.',
      topRoles: ['VP of AI Research', 'Principal Distributed Systems Engineer', 'Staff MLOps Architect']
    },
    {
      name: 'Fintech, WealthTech & Payments',
      icon: 'credit-card',
      description: 'Sub-millisecond ledger systems, high-frequency trading pipelines, banking compliance, fraud ML.',
      topRoles: ['Head of Payment Rails', 'Chief Risk Officer', 'Lead Go/Rust Blockchain Architect']
    },
    {
      name: 'HealthTech & Precision Medicine',
      icon: 'activity',
      description: 'FDA regulatory AI platforms, digital pathology, clinical trials data pipelines, HIPAA security.',
      topRoles: ['Chief Medical Officer', 'VP Regulatory AI', 'Principal Bioinformatics Scientist']
    },
    {
      name: 'B2B Enterprise SaaS & Security',
      icon: 'shield',
      description: 'Zero-trust cybersecurity, multi-tenant cloud platforms, SOC2 compliance, product-led expansion.',
      topRoles: ['Chief Information Security Officer (CISO)', 'Chief Revenue Officer', 'Staff DevSecOps']
    }
  ]);
}
