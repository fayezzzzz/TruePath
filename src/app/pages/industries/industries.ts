import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

export interface Industry {
  id: string;
  name: string;
  icon: string;
  description: string;
  bgImage: string;
}

@Component({
  selector: 'app-industries',
  imports: [CommonModule, RouterModule],
  templateUrl: './industries.html',
  styleUrl: './industries.scss'
})
export class IndustriesComponent {
  private readonly router = inject(Router);

  readonly industries = signal<Industry[]>([
    {
      id: 'hospitality',
      name: 'Hospitality & Leisure',
      icon: 'coffee',
      description: 'Specialized recruitment for luxury hotels, premier resorts, fine dining establishments, and entertainment venues across Dubai and the GCC.',
      bgImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'it-telecom',
      name: 'IT & Telecommunications',
      icon: 'cpu',
      description: 'Headhunting software architects, cloud engineers, AI specialists, cybersecurity professionals, and telecommunication network leaders.',
      bgImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'sales-marketing',
      name: 'Sales, Marketing & Events',
      icon: 'megaphone',
      description: 'Connecting organizations with top commercial leaders, digital growth marketers, PR directors, and large-scale event production experts.',
      bgImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'banking-finance',
      name: 'Banking & Financial Services',
      icon: 'bank',
      description: 'Executive search for corporate banking, asset management, fintech, treasury, risk management, and private equity professionals.',
      bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'logistics-transport',
      name: 'Transportation & Logistics',
      icon: 'truck',
      description: 'Sourcing supply chain heads, freight forwarding specialists, fleet managers, aviation leads, and port operations directors.',
      bgImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'bpo-shared-services',
      name: 'BPO & Shared Services',
      icon: 'headphones',
      description: 'Talent acquisition for high-performance customer support centers, shared services hubs, and multilingual business operations.',
      bgImage: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'retail-ecommerce',
      name: 'Retail & eCommerce',
      icon: 'shopping-bag',
      description: 'Placing leaders in omnichannel retail, luxury brand management, digital merchandising, marketplace operations, and store development.',
      bgImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'healthcare-pharma',
      name: 'Healthcare & Pharmaceuticals',
      icon: 'activity',
      description: 'Recruiting healthcare administrators, medical directors, clinical researchers, regulatory affairs specialists, and pharma executives.',
      bgImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'engineering-construction',
      name: 'Engineering & Construction',
      icon: 'hard-hat',
      description: 'Delivering project directors, structural engineers, MEP specialists, architects, and quantity surveyors for landmark infrastructure projects.',
      bgImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'legal-compliance',
      name: 'Legal & Compliance',
      icon: 'scale',
      description: 'Connecting enterprises with general counsels, corporate lawyers, AML/KYC specialists, and regulatory governance advisors.',
      bgImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'automobile-manufacturing',
      name: 'Automobile & Manufacturing',
      icon: 'car',
      description: 'Headhunting automotive dealership managers, plant operations heads, EV mobility leaders, and industrial manufacturing directors.',
      bgImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'energy-utilities',
      name: 'Energy & Utilities',
      icon: 'zap',
      description: 'Providing strategic talent for solar and renewable energy, power utilities, smart grids, and corporate sustainability initiatives.',
      bgImage: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&auto=format&fit=crop&q=80'
    }
  ]);

  enquire(industry: Industry) {
    this.router.navigate(['/contact'], {
      queryParams: {
        role: `Hiring Requirement - ${industry.name}`
      }
    });
  }
}
