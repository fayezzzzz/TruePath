import { Injectable, signal, computed } from '@angular/core';
import { JobPosition, RecruitmentService, CaseStudy, Testimonial, CandidateApplication, ConsultationRequest } from '../models/talent.models';

@Injectable({
  providedIn: 'root'
})
export class TalentService {

  // Recruitment Services
  readonly services = signal<RecruitmentService[]>([
    {
      id: 'executive-search',
      title: 'Executive Search & C-Suite Advisory',
      tagline: 'Precision headhunting for transformational board and C-level leaders',
      description: 'We partner with enterprise boards and venture-backed founders to secure world-class CEOs, CTOs, CFOs, CROs, and VP-level executives who drive exponential growth.',
      icon: 'crown',
      badge: 'Retained Advisory',
      timeline: '18 - 30 Days to Offer',
      idealFor: 'Series B+ Startups, Public Enterprises, Private Equity portfolio firms',
      stats: { metric: '98.4%', label: 'Executive 2-Year Retention' },
      keyFeatures: [
        'Confidential & passive global market mapping',
        '360-degree leadership competency & behavioral assessment',
        'Equity & executive compensation benchmarking',
        '12-Month replacement guarantee & executive onboarding coach'
      ]
    },
    {
      id: 'tech-engineering',
      title: 'Tech, AI & Engineering Scaling',
      tagline: 'High-caliber software engineers, AI architects, and engineering managers',
      description: 'From Staff Distributed Systems Engineers and LLM specialists to Heads of Engineering, we deliver pre-vetted technical talent with verified coding & architecture rigor.',
      icon: 'code-cpu',
      badge: 'High Velocity',
      timeline: '7 - 14 Days to Shortlist',
      idealFor: 'High-growth SaaS, Fintech, AI Labs, and Cloud Infrastructure scale-ups',
      stats: { metric: '3.2 : 1', label: 'Interview to Offer Ratio' },
      keyFeatures: [
        'Technical vetting by senior staff engineers on our advisory council',
        'Specialized pipelines in Python, Go, Rust, React, AI/MLOps & Cloud',
        'Global remote and hub-based talent relocation management',
        'Hackathon & algorithmic capability screening'
      ]
    },
    {
      id: 'product-design',
      title: 'Product, Growth & Design Leadership',
      tagline: 'Visionaries who build market-defining user experiences and growth engines',
      description: 'We place VP of Product, Lead Product Managers, Chief Design Officers, and Growth Strategists who transform complex problems into high-adoption products.',
      icon: 'sparkles',
      badge: 'Strategic Impact',
      timeline: '12 - 21 Days to Shortlist',
      idealFor: 'Product-led growth organizations and digital transformation initiatives',
      stats: { metric: '450+', label: 'Product Leaders Placed' },
      keyFeatures: [
        'Portfolio & product strategy case-study reviews',
        'Customer-centric metrics & experimentation vetting',
        'B2B Enterprise vs B2C Consumer specialization',
        'Cross-functional engineering & design leadership evaluation'
      ]
    },
    {
      id: 'rpo-embedded',
      title: 'Embedded Talent Partner & RPO',
      tagline: 'Seamlessly embed senior talent acquisition teams directly into your company',
      description: 'Scale hiring rapidly without agency markups. Our dedicated talent partners integrate into your Slack, ATS, and team culture to scale departments efficiently.',
      icon: 'layers',
      badge: 'Enterprise Scalability',
      timeline: 'Flexible Engagements',
      idealFor: 'Companies scaling 20 to 100+ hires per quarter',
      stats: { metric: '42%', label: 'Average Cost-Per-Hire Reduction' },
      keyFeatures: [
        'Full-cycle recruiter + talent sourcer dedicated pods',
        'Employer branding & candidate experience enhancement',
        'ATS optimization (Greenhouse, Lever, Ashby, Workday)',
        'Comprehensive diversity & inclusion (DE&I) sourcing pipelines'
      ]
    },
    {
      id: 'interim-contract',
      title: 'Interim Leadership & Specialized Contractors',
      tagline: 'Immediate deployment of elite fractional and contract specialists',
      description: 'Bridge critical leadership or technical gaps within 48 hours. Access seasoned fractional CTOs, interim CFOs, and sprint-ready architects on demand.',
      icon: 'zap',
      badge: '48h Deployment',
      timeline: '48 - 72 Hours to Placement',
      idealFor: 'Turnaround projects, funding transitions, M&A integrations, critical sprints',
      stats: { metric: '99.1%', label: 'Project Milestone Success' },
      keyFeatures: [
        'Pre-cleared, background-verified elite contractors',
        'Turnkey payroll, IP protection & international compliance',
        'Fractional (1-3 days/week) or full-time interim contracts',
        'Option to convert to permanent roles seamlessly'
      ]
    },
    {
      id: 'hr-advisory',
      title: 'Compensation Benchmarking & HR Advisory',
      tagline: 'Data-backed market intelligence on salary, equity bands, and talent retention',
      description: 'Make competitive offers with real-time compensation data across global tech hubs. We provide salary band design, retention audits, and talent market analytics.',
      icon: 'chart-bar',
      badge: 'Market Intelligence',
      timeline: 'Custom Project Sprints',
      idealFor: 'Leadership teams planning expansions or restructuring compensation',
      stats: { metric: '100% Data-Driven', label: 'Real-Time Global Bands' },
      keyFeatures: [
        'Tier-1 market salary & equity benchmarking by geography',
        'Candidate negotiation playbook and offer closing strategies',
        'Attrition risk analysis and retention roadmaps',
        'Global remote hiring compliance & entity advisory'
      ]
    }
  ]);

  // Featured Case Studies / Portfolio
  readonly caseStudies = signal<CaseStudy[]>([
    {
      id: 'cs-fintech-scale',
      clientName: 'AuraPay Global',
      clientType: 'Series B Fintech Unicorn',
      industry: 'Fintech & Payment Infrastructure',
      location: 'New York & London (Hybrid)',
      challenge: 'Following a $65M Series B funding round, AuraPay needed to quadruple its core engineering and fraud-detection teams from 22 to 110 specialists in under 9 months while maintaining an elite bar for security and low-latency systems.',
      solution: 'TruePath deployed a dedicated 4-person embedded talent pod. We mapped the top payment engineering teams across Tier-1 fintechs, structured technical screening with our advisory panel, and implemented a streamlined 3-stage interview pipeline.',
      timeframe: '8.5 Months',
      rolesPlaced: [
        'Head of Distributed Architecture',
        '18 Senior Backend Engineers (Go & Rust)',
        '6 Staff Fraud & ML Specialists',
        'Lead Product Manager (Global Payments)',
        '5 DevSecOps & Cloud Architects'
      ],
      outcomes: [
        { metric: '88 Placements', label: 'Engineers & Leaders Hired', detail: '100% achieved within target roadmap' },
        { metric: '14 Days', label: 'Average Time to Hire', detail: 'Reduced from client baseline of 52 days' },
        { metric: '98.8%', label: 'Pass-through Technical Vetting', detail: 'Highest interview-to-offer in company history' }
      ],
      quote: {
        text: 'TruePath HR Solutions didn\'t just fill seats; they fundamentally elevated our organizational culture. Their deep understanding of high-throughput systems meant every single candidate they introduced was interview-ready.',
        author: 'Elena Rostova',
        role: 'Chief Technology Officer, AuraPay'
      }
    },
    {
      id: 'cs-healthtech-csuite',
      clientName: 'BioVanguard Health',
      clientType: 'Public HealthTech & AI Diagnostics',
      industry: 'Healthcare & Precision Medicine',
      location: 'Boston & Zurich',
      challenge: 'BioVanguard required a confidential executive search for a new Chief Medical Officer (CMO) and VP of Regulatory AI, requiring unique dual expertise in clinical FDA trials and deep learning algorithms.',
      solution: 'Our Executive Search Practice executed a discrete global talent audit across 14 countries. Within 16 days, we presented 4 finalist candidates with active FDA clearance records and peer-reviewed AI oncology publications.',
      timeframe: '24 Days to Contract Signing',
      rolesPlaced: [
        'Chief Medical Officer (CMO)',
        'VP of Regulatory Affairs & AI Ethics',
        'Principal Computational Biologist'
      ],
      outcomes: [
        { metric: '16 Days', label: 'Shortlist Delivery', detail: '4 vetted global finalists presented' },
        { metric: '100%', label: 'First-Choice Acceptance', detail: 'Seamless executive package negotiation' },
        { metric: 'Zero Leakage', label: 'Confidentiality Compliance', detail: 'Complete discretion throughout board review' }
      ],
      quote: {
        text: 'The caliber of executive insight and speed with which TruePath operated was unmatched. They secured a world-class CMO who was not actively looking and negotiated a win-win transition.',
        author: 'Marcus Vance',
        role: 'Board Chairman, BioVanguard'
      }
    },
    {
      id: 'cs-saas-us-expansion',
      clientName: 'CloudMatrix AI',
      clientType: 'High-Growth Enterprise SaaS',
      industry: 'Enterprise Data & Cloud Infrastructure',
      location: 'San Francisco, Austin, Remote',
      challenge: 'A European enterprise data scale-up needed to establish its North American Go-To-Market presence from scratch, hiring a complete commercial and solutions engineering team in 90 days.',
      solution: 'TruePath designed a localized compensation framework, calibrated talent bands against global benchmarks, and headhunted top quota-exceeding Enterprise AEs and Solutions Architects with existing Fortune 500 books of business.',
      timeframe: '90 Days',
      rolesPlaced: [
        'VP of North American Sales',
        '8 Strategic Enterprise Account Executives',
        '4 Principal Solutions Architects',
        'Head of Customer Success'
      ],
      outcomes: [
        { metric: '$12M ARR', label: 'New Pipeline Generated', detail: 'Within 6 months of new team onboarding' },
        { metric: '100%', label: 'Quota Attainment in Q1', detail: 'Zero early attrition' },
        { metric: '21 Days', label: 'Avg. Offer Cycle', detail: 'Competitive sign-on closure' }
      ],
      quote: {
        text: 'Expanding into the US and EMEA market is fraught with recruitment risks. TruePath gave us unfair hiring advantage with their deep talent relationships and flawless execution.',
        author: 'David Lindqvist',
        role: 'Chief Revenue Officer, CloudMatrix AI'
      }
    }
  ]);

  // Open Job Positions
  readonly jobs = signal<JobPosition[]>([
    {
      id: 'JOB-901',
      title: 'VP of Engineering (Distributed Systems & AI)',
      department: 'Executive',
      location: 'San Francisco, CA (Hybrid / Remote Option)',
      workType: 'Hybrid',
      employmentType: 'Executive Search',
      experienceLevel: 'VP / C-Level',
      salaryRange: '$320,000 - $420,000',
      equity: '0.75% - 1.5% Equity Package',
      postedDate: '2 days ago',
      isUrgent: true,
      isFeatured: true,
      clientSector: 'AI Infrastructure & GPU Orchestration',
      overview: 'Our client, an ultra-fast growing Series B AI infrastructure startup backed by top-tier venture funds, is seeking a transformational VP of Engineering to lead an organization of 60+ engineers.',
      requirements: [
        '10+ years of software engineering leadership in cloud-native or distributed platforms',
        'Proven track record scaling teams from 30 to 100+ engineers',
        'Deep architectural understanding of Kubernetes, GPU clustering, or low-latency stream processing',
        'Exceptional mentorship and culture-building track record'
      ],
      responsibilities: [
        'Directly oversee Core Infrastructure, AI Platform, and DevSecOps engineering teams',
        'Partner with CEO and CTO to define 3-year technical roadmap and architectural evolution',
        'Establish engineering excellence, CI/CD reliability, and high-velocity shipping standards',
        'Attract and retain world-class senior staff engineers and engineering managers'
      ],
      benefits: [
        'Comprehensive family health, dental & vision coverage with $0 deductible',
        'Substantial equity grant with early liquidity provisions',
        'Unlimited PTO with mandatory 3-week minimum',
        'Annual $10,000 executive coaching & continuous education stipend'
      ]
    },
    {
      id: 'JOB-902',
      title: 'Principal Staff Software Engineer (Go / Rust)',
      department: 'Engineering',
      location: 'New York, NY / Remote (US & Canada)',
      workType: 'Remote',
      employmentType: 'Full-time',
      experienceLevel: 'Principal',
      salaryRange: '$240,000 - $310,000',
      equity: 'Competitive Equity + Annual Bonus',
      postedDate: '1 day ago',
      isUrgent: true,
      isFeatured: true,
      clientSector: 'High-Frequency Fintech & DeFi Infrastructure',
      overview: 'Looking for a visionary systems architect to drive the next generation of sub-millisecond execution engines and decentralized settlement networks.',
      requirements: [
        '8+ years of production experience in Go, Rust, or C++',
        'Mastery of asynchronous networking, memory-efficient concurrency, and distributed consensus (Raft/Paxos)',
        'Experience building systems processing 500,000+ operations per second',
        'Track record of open-source contributions or technical whitepapers'
      ],
      responsibilities: [
        'Architect and implement ultra-low-latency transaction ordering pipeline',
        'Design fault-tolerant failover architectures across multiple AWS & GCP bare-metal zones',
        'Conduct architectural design reviews and champion code quality standards',
        'Mentor Senior and Staff engineers across global time zones'
      ],
      benefits: [
        '100% remote flexibility with home office setup budget ($3,500)',
        'Quarterly performance bonuses in USD or stable asset allocations',
        '401(k) with 6% uncapped company match',
        'Annual global team retreat (Tokyo, Lisbon, Banff)'
      ]
    },
    {
      id: 'JOB-903',
      title: 'Director of Product Management (Enterprise Data & ML)',
      department: 'Product',
      location: 'Austin, TX / London, UK',
      workType: 'Hybrid',
      employmentType: 'Full-time',
      experienceLevel: 'Director',
      salaryRange: '$210,000 - $275,000',
      equity: '0.3% - 0.6% Equity',
      postedDate: '3 days ago',
      isFeatured: true,
      clientSector: 'Enterprise Data Mesh & Real-time Analytics',
      overview: 'Champion the product vision for a premier enterprise data platform utilized by 35% of Fortune 100 financial and retail conglomerates.',
      requirements: [
        '7+ years in technical B2B Product Management with 3+ years leading PM teams',
        'Demonstrated success taking data/AI platform products from $10M to $50M+ ARR',
        'Strong technical foundation in SQL, data warehousing, and LLM tooling integrations',
        'Outstanding stakeholder management and executive storytelling capabilities'
      ],
      responsibilities: [
        'Lead a team of 5 Senior and Lead Product Managers across data governance & pipelines',
        'Translate complex enterprise customer needs into prioritized roadmap deliverables',
        'Work closely with Go-To-Market and Solutions teams to accelerate deal velocity',
        'Define key usage, retention, and monetization KPIs'
      ],
      benefits: [
        'Flexible hybrid schedule (2 days in-office)',
        'Generous parental leave (18 weeks fully paid)',
        'Health & wellness monthly subsidy ($300/mo)',
        'Annual company equity refresh grants'
      ]
    },
    {
      id: 'JOB-904',
      title: 'Lead Cloud Infrastructure & Kubernetes Architect',
      department: 'Engineering',
      location: 'Remote (EMEA / North America)',
      workType: 'Remote',
      employmentType: 'Full-time',
      experienceLevel: 'Lead',
      salaryRange: '$190,000 - $245,000',
      equity: 'Equity Grants Included',
      postedDate: '4 days ago',
      isFeatured: false,
      clientSector: 'Cybersecurity & Cloud Threat Detection',
      overview: 'Lead the cloud platform infrastructure for a high-security automated threat remediation SaaS processing petabytes of network telemetry daily.',
      requirements: [
        '6+ years in DevOps, Platform Engineering, or SRE roles',
        'Deep expertise with Kubernetes (EKS/GKE), Terraform, ArgoCD, and Prometheus/Grafana',
        'Demonstrated experience managing multi-region multi-cloud infrastructures',
        'SOC2 and ISO 27001 compliance hardening experience'
      ],
      responsibilities: [
        'Design immutable infrastructure as code and zero-trust mesh architectures',
        'Automate deployment pipelines to achieve 99.999% platform availability',
        'Optimize multi-million dollar cloud compute spend and FinOps initiatives',
        'Lead 24/7 on-call tier-3 escalations framework with high automation'
      ],
      benefits: [
        'Global remote contract or direct employee entity options',
        'Top-spec MacBook Pro M-series + 4K dual display setup',
        'Annual learning and conference budget ($4,000)',
        'Private health insurance'
      ]
    },
    {
      id: 'JOB-905',
      title: 'Head of People & Global Talent Acquisition',
      department: 'People & HR',
      location: 'London, UK / Hybrid',
      workType: 'Hybrid',
      employmentType: 'Full-time',
      experienceLevel: 'Director',
      salaryRange: '£140,000 - £180,000',
      equity: 'Equity Options Pool',
      postedDate: '5 days ago',
      isFeatured: false,
      clientSector: 'Next-Gen ClimateTech & Clean Energy SaaS',
      overview: 'Shape the international people strategy, culture, and talent acquisition engine for an exciting mission-driven climate tech organization scaling across Europe and North America.',
      requirements: [
        '8+ years in progressive HR/People leadership, ideally in high-growth tech firms',
        'Deep knowledge of international employment law (UK, EU, US)',
        'Proven expertise in performance frameworks, leveling matrices, and remote work culture',
        'Data-driven approach to retention, eNPS, and DEI benchmarks'
      ],
      responsibilities: [
        'Oversee global HR operations, employee relations, and talent acquisition',
        'Implement transparent leveling ladders and compensation frameworks',
        'Drive employee engagement, manager training, and leadership coaching',
        'Ensure rigorous compliance across international employment hubs'
      ],
      benefits: [
        'Hybrid working in modern Central London office',
        'Company electric vehicle salary sacrifice scheme',
        'Enhanced pension contribution (8%)',
        '28 days holiday + bank holidays'
      ]
    },
    {
      id: 'JOB-906',
      title: 'Chief Financial Officer (CFO - High Growth SaaS)',
      department: 'Executive',
      location: 'New York, NY / Boston, MA',
      workType: 'Hybrid',
      employmentType: 'Executive Search',
      experienceLevel: 'VP / C-Level',
      salaryRange: '$350,000 - $450,000',
      equity: '1.2% - 2.0% Executive Equity Pool',
      postedDate: 'Just now',
      isUrgent: true,
      isFeatured: true,
      clientSector: 'B2B Enterprise Automation SaaS',
      overview: 'Confidential mandate to recruit an experienced CFO with prior SaaS IPO or large-scale strategic M&A exit experience to lead financial strategy and investor relations.',
      requirements: [
        '12+ years in progressive financial leadership, including at least one CFO role in a $100M+ ARR tech company',
        'Direct experience managing Series C/D rounds, debt facilities, or public S-1 filings',
        'Exceptional command of SaaS unit economics, Rule of 40, and international tax transfer pricing',
        'Track record building high-performance FP&A and accounting divisions'
      ],
      responsibilities: [
        'Serve as trusted financial advisor to CEO and Board of Directors',
        'Lead capital allocation, debt management, and global financial modeling',
        'Drive investor relations and quarterly board financial governance',
        'Prepare enterprise audit, compliance, and readiness for public markets'
      ],
      benefits: [
        'Top-tier executive compensation package with liquidity roadmap',
        'Executive health and wellness concierge plan',
        'Dedicated corporate legal and tax advisory assistance'
      ]
    }
  ]);

  // Testimonials
  readonly testimonials = signal<Testimonial[]>([
    {
      id: 't1',
      quote: 'TruePath transformed our talent strategy. When other agencies sent uncalibrated resumes, TruePath presented 3 candidates who were all exceptional. We hired two within 10 days.',
      author: 'Jonathan Sterling',
      role: 'Chief Technology Officer',
      company: 'OmniVanguard Software',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      type: 'Client',
      rating: 5
    },
    {
      id: 't2',
      quote: 'As an executive leader looking for my next challenge in Dubai, the TruePath team treated my career with unmatched respect and discretion. They connected me to an ideal VP role that aligned with my values.',
      author: 'Dr. Alistair Chen',
      role: 'VP of AI Research (Placed)',
      company: 'Synthetix Biosystems',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      type: 'Placed Candidate',
      rating: 5
    },
    {
      id: 't3',
      quote: 'TruePath is our secret weapon for leadership and C-suite searches. Their rigor in behavioral assessment and executive compensation benchmarking made our board hiring decisions fast and confident.',
      author: 'Camilla Valente',
      role: 'Managing Partner',
      company: 'VentureHorizon Capital',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      type: 'Client',
      rating: 5
    }
  ]);

  // Candidate Submissions (saved in localStorage for persistence)
  readonly applications = signal<CandidateApplication[]>(this.loadStoredApplications());

  // Consultation Requests
  readonly consultations = signal<ConsultationRequest[]>(this.loadStoredConsultations());

  // Quick stats computed
  readonly totalJobsCount = computed(() => this.jobs().length);
  readonly featuredJobs = computed(() => this.jobs().filter(j => j.isFeatured));

  // Search & Filter State
  readonly searchFilter = signal<{
    query: string;
    department: string;
    workType: string;
    experienceLevel: string;
  }>({
    query: '',
    department: '',
    workType: '',
    experienceLevel: ''
  });

  readonly filteredJobs = computed(() => {
    const { query, department, workType, experienceLevel } = this.searchFilter();
    return this.jobs().filter(job => {
      const matchQuery = !query || 
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.overview.toLowerCase().includes(query.toLowerCase()) ||
        job.location.toLowerCase().includes(query.toLowerCase()) ||
        job.clientSector.toLowerCase().includes(query.toLowerCase());

      const matchDept = !department || job.department === department;
      const matchWork = !workType || job.workType === workType;
      const matchExp = !experienceLevel || job.experienceLevel === experienceLevel;

      return matchQuery && matchDept && matchWork && matchExp;
    });
  });

  // Action methods
  submitCandidateApplication(app: Omit<CandidateApplication, 'id' | 'referenceCode' | 'submittedAt' | 'status'>): CandidateApplication {
    const referenceCode = 'NX-' + Math.floor(100000 + Math.random() * 900000);
    const newApp: CandidateApplication = {
      ...app,
      id: 'app-' + Date.now(),
      referenceCode,
      submittedAt: new Date().toISOString(),
      status: 'Received'
    };

    const updated = [newApp, ...this.applications()];
    this.applications.set(updated);
    this.saveApplicationsToStorage(updated);
    return newApp;
  }

  submitConsultationRequest(req: Omit<ConsultationRequest, 'id' | 'createdAt'>): ConsultationRequest {
    const newReq: ConsultationRequest = {
      ...req,
      id: 'cons-' + Date.now(),
      createdAt: new Date().toISOString()
    };

    const updated = [newReq, ...this.consultations()];
    this.consultations.set(updated);
    this.saveConsultationsToStorage(updated);
    return newReq;
  }

  updateSearchFilter(filter: Partial<{ query: string; department: string; workType: string; experienceLevel: string }>) {
    this.searchFilter.update(current => ({ ...current, ...filter }));
  }

  resetSearchFilter() {
    this.searchFilter.set({
      query: '',
      department: '',
      workType: '',
      experienceLevel: ''
    });
  }

  private loadStoredApplications(): CandidateApplication[] {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const data = localStorage.getItem('nexus_candidate_applications');
        if (data) return JSON.parse(data);
      }
    } catch (e) {
      console.warn('LocalStorage not available', e);
    }
    return [];
  }

  private saveApplicationsToStorage(apps: CandidateApplication[]) {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('nexus_candidate_applications', JSON.stringify(apps));
      }
    } catch (e) {
      console.warn('Failed to save to localStorage', e);
    }
  }

  private loadStoredConsultations(): ConsultationRequest[] {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const data = localStorage.getItem('nexus_consultations');
        if (data) return JSON.parse(data);
      }
    } catch (e) {
      console.warn('LocalStorage not available', e);
    }
    return [];
  }

  private saveConsultationsToStorage(reqs: ConsultationRequest[]) {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('nexus_consultations', JSON.stringify(reqs));
      }
    } catch (e) {
      console.warn('Failed to save to localStorage', e);
    }
  }
}
