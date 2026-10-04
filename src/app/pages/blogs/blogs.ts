import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BlogPost } from '../../models/talent.models';

@Component({
  selector: 'app-blogs',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './blogs.html',
  styleUrl: './blogs.scss'
})
export class BlogsComponent {
  searchQuery = '';
  selectedCategory = 'All';

  readonly categories = [
    'All',
    'UAE Compliance & Policy',
    'Executive Compensation',
    'Talent Acquisition',
    'HR Technology & AI',
    'Leadership & Culture',
    'Global Mobility'
  ];

  readonly selectedBlog = signal<BlogPost | null>(null);

  readonly blogs = signal<BlogPost[]>([
    {
      id: 'emiratisation-2026-guide',
      title: 'Navigating Emiratisation in 2026: A Practical Guide for Private Sector Employers',
      category: 'UAE Compliance & Policy',
      author: 'Dr. Tariq Al-Nuaimi',
      authorRole: 'Senior Managing Partner',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      publishedDate: 'October 2, 2026',
      readTime: '5 min read',
      coverImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=700&auto=format&fit=crop&q=80',
      excerpt: 'Key strategic updates on MOHRE quotas, career progression ladders for UAE national talent, and how to build sustainable retention strategies beyond regulatory minimums.',
      tags: ['Emiratisation', 'MOHRE', 'UAE Labour Law', 'Workforce Planning'],
      isFeatured: true,
      content: [
        'As the UAE accelerates its knowledge-based economy under Vision 2031, private sector companies face evolving Emiratisation targets. Success in 2026 requires organizations to move from tick-box compliance to building high-value, long-term careers for UAE National professionals.',
        'Our Dubai Executive Search Practice has identified three critical pillars for successful Emiratisation integration:',
        '1. Structured Mentorship & Accelerated Leadership Tracks: High-potential Emirati graduates and mid-level managers thrive when paired with C-suite sponsors who provide direct commercial exposure and clear KPI benchmarks.',
        '2. Competitive Total Rewards Alignment: Structuring packages that incorporate Nafis program subsidies alongside robust health, wellness, and professional training stipends.',
        '3. Cross-Functional Embedding: Rather than concentrating national talent solely within public relations or administration, leading firms are placing UAE nationals into core revenue-generating, algorithmic, and financial strategy roles.'
      ]
    },
    {
      id: 'executive-compensation-gcc',
      title: 'Executive Compensation in the GCC: Tax-Free Structuring, LTIPs, and Golden Visa Incentives',
      category: 'Executive Compensation',
      author: 'Elena Rostova',
      authorRole: 'Head of Executive Advisory',
      authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      publishedDate: 'September 28, 2026',
      readTime: '7 min read',
      coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&auto=format&fit=crop&q=80',
      excerpt: 'How leading enterprises and family offices in Dubai and Riyadh are structuring competitive long-term incentive plans and cross-border relocation packages to attract C-suite talent.',
      tags: ['Executive Compensation', 'Golden Visa', 'Total Rewards', 'C-Suite Hiring'],
      isFeatured: true,
      content: [
        'Attracting Tier-1 global executives from London, New York, and Singapore to Dubai and Riyadh has become a cornerstone of regional expansion. However, base salary alone is no longer the differentiator.',
        'Today\'s top leaders prioritize strategic Long-Term Incentive Plans (LTIPs), equity co-investment rights, and turnkey family relocation infrastructure.',
        'Key trends shaping regional executive packages in 2026:',
        '• Long-Term Value Creation: Family conglomerates and private equity portfolio companies increasingly utilize synthetic equity units (phantom shares) tied to 3-year EBITDA and expansion milestones.',
        '• Golden Visa & Wealth Protection: Employers facilitating 10-year UAE Golden Visas and DIFC/ADGM foundation asset structuring gain significant closing advantage.',
        '• Comprehensive Family Logistics: Direct coverage for premium international schooling, concierge private healthcare, and annual business-class travel allowances are now expected standards for VP and C-Level hires.'
      ]
    },
    {
      id: 'embedded-talent-rpo-scaling',
      title: 'The Rise of Embedded Talent Pods (RPO): Scaling 50+ Hires Without Agency Markups',
      category: 'Talent Acquisition',
      author: 'Jonathan Sterling',
      authorRole: 'Practice Director - Tech & Scale',
      authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      publishedDate: 'September 20, 2026',
      readTime: '4 min read',
      coverImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&auto=format&fit=crop&q=80',
      excerpt: 'Why high-growth scale-ups and conglomerates are transitioning from ad-hoc contingency recruiters to dedicated embedded talent partners integrated directly into their ATS and Slack.',
      tags: ['RPO', 'Talent Pods', 'Hiring Velocity', 'Cost Optimization'],
      content: [
        'Traditional contingency recruitment models often create misaligned incentives: agencies focus on high-commission deal closures rather than long-term team cohesion. In contrast, Embedded Recruitment Process Outsourcing (RPO) embeds senior talent partners directly into your corporate infrastructure.',
        'Our embedded talent pods operate within your internal ATS (Greenhouse, Workday, Ashby) and collaborate in daily standups.',
        'Benefits achieved by our enterprise partners include an average 42% reduction in cost-per-hire and an offer-to-acceptance rate exceeding 96% due to deep employer brand immersion.'
      ]
    },
    {
      id: 'ai-in-human-capital-management',
      title: 'AI in Human Capital Management: Enhancing Candidate Calibration Without Losing the Human Touch',
      category: 'HR Technology & AI',
      author: 'Dr. Alistair Chen',
      authorRole: 'Principal AI & People Analytics',
      authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      publishedDate: 'September 15, 2026',
      readTime: '6 min read',
      coverImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&auto=format&fit=crop&q=80',
      excerpt: 'How artificial intelligence is transforming talent mapping, skills verification, and predictive culture matching while preserving deep human empathy in executive hiring.',
      tags: ['AI in HR', 'People Analytics', 'Talent Mapping', 'HR Tech'],
      content: [
        'Artificial intelligence is revolutionizing executive talent intelligence. From automated global talent mapping across 140+ countries to predictive tenure modeling, modern HR leaders leverage algorithmic tools to make data-backed hiring decisions.',
        'However, true leadership assessment remains inherently human. Emotional intelligence, cultural adaptability, and crisis management cannot be parsed by algorithms alone.',
        'TruePath combines proprietary market intelligence mapping with rigorous behavioral interviews conducted by former industry operators.'
      ]
    },
    {
      id: 'preventing-executive-burnout',
      title: 'Preventing Executive Burnout & Attrition in High-Velocity Middle East Markets',
      category: 'Leadership & Culture',
      author: 'Sarah Al-Mansoori',
      authorRole: 'Senior HRBP Lead',
      authorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
      publishedDate: 'September 08, 2026',
      readTime: '5 min read',
      coverImage: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&auto=format&fit=crop&q=80',
      excerpt: 'Actionable frameworks for CEOs and CHROs to foster resilient organizational cultures, flexible executive working rhythms, and authentic employee engagement.',
      tags: ['Leadership Culture', 'Executive Retention', 'Mental Health', 'eNPS'],
      content: [
        'With regional markets operating at peak velocity, senior executives frequently juggle multi-time-zone stakeholders across Asia, Europe, and the Americas. Unchecked, executive fatigue directly threatens strategic execution and organizational stability.',
        'Forward-thinking CHROs are introducing proactive wellness sabbaticals, dedicated executive coaching councils, and asynchronous communication protocols.',
        'Organizations that invest in executive resilience see a 2.4x increase in leadership tenure and significantly reduced corporate disruption.'
      ]
    },
    {
      id: 'cross-border-executive-headhunting',
      title: 'Cross-Border Executive Headhunting: Relocating Top Tier Talent to Dubai and KSA',
      category: 'Global Mobility',
      author: 'Marcus Vance',
      authorRole: 'Partner - Global Search',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
      publishedDate: 'August 30, 2026',
      readTime: '6 min read',
      coverImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&auto=format&fit=crop&q=80',
      excerpt: 'A strategic roadmap for multinational corporations navigating visa fast-tracking, family relocation support, schooling allowances, and cultural onboarding.',
      tags: ['Global Mobility', 'Relocation', 'Expat Leadership', 'MENA Expansion'],
      content: [
        'Relocating an executive family across continents involves far more than booking flights. It requires a synchronized partnership between corporate HR, legal authorities, and relocation specialists.',
        'At TruePath, our 360-degree relocation advisory covers spouse career transitions, housing market navigation, international school enrollments, and tax residency certificate protocols.',
        'By removing the friction of international transitions, candidates hit the ground running with 100% focus on corporate growth.'
      ]
    }
  ]);

  get filteredBlogs(): BlogPost[] {
    const query = this.searchQuery.trim().toLowerCase();
    const cat = this.selectedCategory;

    return this.blogs().filter(blog => {
      const matchCat = cat === 'All' || blog.category === cat;
      const matchQuery = !query ||
        blog.title.toLowerCase().includes(query) ||
        blog.excerpt.toLowerCase().includes(query) ||
        blog.author.toLowerCase().includes(query) ||
        blog.tags.some(t => t.toLowerCase().includes(query));
      return matchCat && matchQuery;
    });
  }

  setCategory(cat: string) {
    this.selectedCategory = cat;
  }

  openBlog(blog: BlogPost) {
    this.selectedBlog.set(blog);
  }

  closeBlog() {
    this.selectedBlog.set(null);
  }
}
