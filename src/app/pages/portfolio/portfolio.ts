import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

export interface ClientItem {
  id: string;
  name: string;
  badge: string;
  sector: string;
  icon: string;
  description: string;
  bgImage: string;
  site?: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule, RouterModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class PortfolioComponent {
  private readonly router = inject(Router);

  readonly clients = signal<ClientItem[]>([
    {
      id: 'Aixperia',
      name: 'Aixperia.',
      badge: 'IT Services',
      sector: 'Manufacturing & Home Interiors',
      icon: 'cpu',
      description: 'Aixperia is a cloud-based SaaS platform that takes modular cabinetry from design to production in one seamless workflow. It connects designers, dealers, and manufacturers, enabling efficient collaboration and split production across factories.',
      bgImage: 'assets/aixperia.png',
      site: 'https://www.aixperia.com/'
    },
    {
      id: 'mayah',
      name: 'Mayah',
      badge: 'Interiors',
      sector: 'Manufacturing & Home Interiors',
      icon: 'furniture',
      description: 'Mayah Kitchens creates premium, custom-designed modular kitchens with precision, quality materials and smart storage. Rooted in Kerala and expanding across South India, we bring your dream kitchen to life. Let’s design yours today.',
      bgImage: 'assets/mayah.png',
      site: 'https://www.instagram.com/mayah.kitchens/?hl=en'
    },
    {
      id: 'logistics-omni',
      name: 'Genius International Co.W.L.L ',
      badge: 'Fire & Safety',
      sector: 'Fire & Safety',
      icon: 'fire-safety',
      description: 'Genius International Co.W.L.L is a safety and security solutions provider headquartered in Doha, Qatar. Genius international is future focused on emerging 3rd Platform technologies and deliver valued services to our clients based on proven experience.',
      bgImage: 'assets/genius_bgfree.png',
      site: 'https://geniuswll.com/'
    },
  ]);

  visitSite(client: ClientItem) {
    if (client.site) {
      const url = client.site.startsWith('http') ? client.site : `https://${client.site}`;
      if (typeof window !== 'undefined') {
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    } else {
      this.enquire(client);
    }
  }

  enquire(client: ClientItem) {
    this.router.navigate(['/contact'], {
      queryParams: {
        role: `Portfolio Mandate - ${client.name} (${client.sector})`
      }
    });
  }
}
