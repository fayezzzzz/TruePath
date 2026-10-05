import { Injectable, signal, computed } from '@angular/core';
import { JobPosition, RecruitmentService, CaseStudy, Testimonial, HiringRequirement, ConsultationRequest } from '../models/talent.models';

@Injectable({
  providedIn: 'root'
})
export class TalentService {

  // Recruitment & Corporate HR Services
  readonly services = signal<RecruitmentService[]>([
    {
      id: 'staffing-solutions',
      title: 'Staffing & Temporary Workforce',
      tagline: 'Agile, flexible staffing solutions for project surges, seasonal peaks, and interim support',
      description: 'Deploy qualified contract professionals across administration, tech, operations, and customer support with complete legal sponsorship and payroll management handled by TruePath.',
      icon: 'users',
      badge: 'STAFFING',
      timeline: '24 - 48 Hours to Deployment',
      idealFor: 'Sudden workload surges, seasonal spikes, maternity covers, and pilot projects',
      stats: { metric: '48 Hours', label: 'Average Onboarding Speed' },
      keyFeatures: [
        'Pre-screened, immediately available talent pool across Dubai and UAE',
        'Flexible short-term, medium-term, and temp-to-perm staffing contracts',
        'Full WPS payroll, timesheet management, and statutory benefits handling',
        'Rapid replacement guarantee for uninterrupted operational continuity'
      ]
    },
    {
      id: 'permanent-recruitment',
      title: 'Permanent Recruitment',
      tagline: 'Precision direct-hire contingency search across specialist, mid-level, and senior roles',
      description: 'We identify, vet, and deliver high-impact professionals who align seamlessly with your corporate culture, technical requirements, and long-term organizational vision.',
      icon: 'user-check',
      badge: 'PERMANENT RECRUITMENT',
      timeline: '5 - 10 Days to Shortlist',
      idealFor: 'Core functional roles, team expansion, department heads, and technical specialists',
      stats: { metric: '96.2%', label: 'Offer Acceptance Rate' },
      keyFeatures: [
        'Comprehensive multi-channel headhunting across active and passive candidate markets',
        'Rigorous 3-stage competency, behavioural, and domain-specific assessment',
        'Thorough background checks, credential verification, and reference audits',
        'Standard 90-day free candidate replacement warranty on every placement'
      ]
    },
    {
      id: 'executive-search',
      title: 'Executive Search & Headhunting',
      tagline: 'Confidential retained search for transformational C-Suite, Board, and Managing Director appointments',
      description: 'Partnering with enterprise boards, family offices, and multinational firms to headhunt world-class CEOs, CFOs, CHROs, CTOs, and Regional Managing Directors across the GCC.',
      icon: 'crown',
      badge: 'EXECUTIVE SEARCH',
      timeline: '15 - 30 Days to Finalist Panel',
      idealFor: 'C-Suite appointments, Board of Directors, Country Managers, and confidential leadership transitions',
      stats: { metric: '98.5%', label: 'Executive 2-Year Retention' },
      keyFeatures: [
        'Discreet, confidential market mapping of passive Tier-1 regional and global executives',
        'Structured 360-degree leadership competency and cultural calibration framework',
        'Executive compensation, equity, and LTIP benchmarking tailored to the GCC market',
        '12-Month replacement guarantee with dedicated executive onboarding support'
      ]
    },
    {
      id: 'hr-advisory',
      title: 'HR Advisory & Transformation',
      tagline: 'Strategic consulting to modernize organization design, compensation frameworks, and HR governance',
      description: 'Empower your leadership with actionable human capital strategies. We design competitive compensation bands, performance appraisal architectures, and compliant HR policy handbooks.',
      icon: 'trending-up',
      badge: 'HR ADVISORY & TRANSFORMATION',
      timeline: 'Custom Advisory Sprints',
      idealFor: 'Enterprises scaling rapidly, corporate restructurings, M&A integrations, and compliance overhauls',
      stats: { metric: '100% Compliant', label: 'UAE Labour Law Alignment' },
      keyFeatures: [
        'Organization design, job evaluation grading (Mercer/Korn Ferry), and leveling frameworks',
        'GCC compensation & benefits benchmarking, salary grids, and incentive plan design',
        'UAE Labour Law compliance audits, employee handbooks, and standard operating procedures',
        'Performance management system (PMS) design with OKR and KPI calibration'
      ]
    },
    {
      id: 'mass-recruitment',
      title: 'Mass Recruitment & Project Hiring',
      tagline: 'Turnkey high-volume hiring campaigns for major expansions, store rollouts, and infrastructure projects',
      description: 'Mobilize dozens or hundreds of qualified staff simultaneously. From initial overseas sourcing and assessment days to batch visa processing and deployment, we manage the entire recruitment supply chain.',
      icon: 'briefcase',
      badge: 'MASS RECRUITMENT',
      timeline: 'Rapid High-Volume Deployments',
      idealFor: 'Hospitality grand openings, retail chain rollouts, logistics hubs, and construction mega-projects',
      stats: { metric: '500+ Hires', label: 'Single Campaign Capacity' },
      keyFeatures: [
        'Overseas sourcing campaigns across India, Philippines, Nepal, Egypt, and Eastern Europe',
        'Structured digital assessment centers and high-volume candidate screening days',
        'Bulk visa clearance, flight coordination, medicals, and group onboarding logistics',
        'Dedicated project management team ensuring timeline and budget adherence'
      ]
    },
    {
      id: 'hr-outsourcing',
      title: 'HR Outsourcing & Managed Services',
      tagline: 'Complete outsourcing of payroll, employee lifecycle administration, and Employer of Record (EoR)',
      description: 'Transfer non-core HR operations to our specialized specialists. Reduce overhead, eliminate regulatory liability, and guarantee flawless WPS payroll processing every cycle.',
      icon: 'shield',
      badge: 'OUTSOURCING',
      timeline: 'Seamless Transition in 14 Days',
      idealFor: 'Organizations looking to streamline overhead and ensure zero-error payroll compliance',
      stats: { metric: '0% Error', label: 'WPS Payroll Accuracy' },
      keyFeatures: [
        'End-to-end monthly WPS payroll calculation, gratuity provisioning, and salary transfer',
        'Complete employee lifecycle management (onboarding, leave tracking, exit clearance)',
        'Group health insurance management, claim escalation, and broker negotiations',
        'Employer of Record (EoR) services enabling rapid market hiring without local entity'
      ]
    },
    {
      id: 'rpo-embedded',
      title: 'Recruitment Process Outsourcing (RPO)',
      tagline: 'Embedded talent acquisition teams dedicated entirely to your company’s hiring targets',
      description: 'Integrate senior recruiters directly into your internal workflows. Get the strategic horsepower of a high-performing talent function with lower cost-per-hire and accelerated hiring speed.',
      icon: 'layers',
      badge: 'RPO',
      timeline: 'Dedicated Ongoing Partnership',
      idealFor: 'Enterprises making 15 to 100+ strategic hires per year seeking lower cost-per-hire',
      stats: { metric: '42%', label: 'Average Cost-Per-Hire Reduction' },
      keyFeatures: [
        'Dedicated Senior Talent Partner and Sourcer pods embedded in your ATS and communication channels',
        'Customized employer branding campaigns, job descriptions, and recruitment marketing',
        'Optimized applicant tracking workflows (Workday, Greenhouse, Lever, SAP SuccessFactors)',
        'Comprehensive monthly talent analytics, hiring funnels, and executive reporting'
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

  // Talent Disciplines & Practice Roles (Specialized capabilities TruePath headhunts for enterprise clients)
  readonly jobs = signal<JobPosition[]>([
    {
      id: 'ROLE-HR01',
      title: 'Chief Human Resources Officer (CHRO) / HR VP',
      department: 'Executive',
      location: 'Dubai, UAE / GCC Regional',
      workType: 'Hybrid',
      employmentType: 'Executive Search',
      experienceLevel: 'VP / C-Level',
      salaryRange: 'AED 65,000 - 95,000 / month',
      equity: 'Executive Long-term Incentive Plan (LTIP)',
      postedDate: 'Active Mandate',
      isUrgent: true,
      isFeatured: true,
      clientSector: 'Conglomerate & Regional Enterprise',
      overview: 'Executive leadership mandate for visionary CHROs and VP People to design organization-wide talent architecture, leadership succession, and Emiratisation strategy across 1,000+ employee groups.',
      requirements: [
        '12+ years of progressive HR leadership with proven C-suite executive presence in the Middle East / GCC',
        'Track record leading large-scale organizational transformations and M&A integrations',
        'Mastery of UAE Labour Law, Emiratisation quotas, and progressive retention frameworks',
        'Demonstrated strategic capability in executive compensation and board governance'
      ],
      responsibilities: [
        'Advise CEO and Board on workforce planning, executive compensation, and leadership succession',
        'Oversee comprehensive HR operating models across multiple business units',
        'Spearhead high-impact employer branding and executive talent acquisition initiatives',
        'Establish KPI frameworks for employee net promoter score (eNPS) and organizational resilience'
      ],
      benefits: [
        'Executive tier medical coverage for family with VIP international hospital network',
        'Performance bonus up to 40% of annual base',
        'Executive housing and schooling allowance allocation'
      ]
    },
    {
      id: 'ROLE-HR02',
      title: 'Senior HR Business Partner (Strategic HRBP)',
      department: 'People & HR',
      location: 'Dubai, UAE (DIFC / Downtown)',
      workType: 'Hybrid',
      employmentType: 'Full-time',
      experienceLevel: 'Senior',
      salaryRange: 'AED 35,000 - 48,000 / month',
      equity: 'Annual Discretionary Bonus',
      postedDate: 'Active Mandate',
      isUrgent: true,
      isFeatured: true,
      clientSector: 'Financial Services & Fintech',
      overview: 'Dedicated search for strategic HR Business Partners who act as trusted advisors to business unit heads, aligning human capital strategies with commercial objectives.',
      requirements: [
        '6-10 years of dedicated HRBP experience in fast-paced corporate or high-growth technology environments',
        'Strong expertise in talent management, performance calibrations, and employee relations',
        'Demonstrated analytical mindset with HR metrics, retention modeling, and leveling systems',
        'CIPD / SHRM certification highly preferred'
      ],
      responsibilities: [
        'Partner with senior directors to execute departmental workforce planning and talent reviews',
        'Coach line managers on high-performance feedback, leadership skills, and conflict resolution',
        'Drive organizational design changes and restructuring initiatives seamlessly',
        'Collaborate with Talent Acquisition pods to expedite senior specialist recruitment'
      ],
      benefits: [
        'Premium DIFC corporate medical insurance',
        'Hybrid working policy (2 days work from home)',
        'Annual flight allowance and continuous professional development budget'
      ]
    },
    {
      id: 'ROLE-HR03',
      title: 'Head of Talent Acquisition & Executive Sourcing',
      department: 'People & HR',
      location: 'Dubai & Riyadh (Dual Hub)',
      workType: 'Hybrid',
      employmentType: 'Full-time',
      experienceLevel: 'Director',
      salaryRange: 'AED 45,000 - 60,000 / month',
      equity: 'Performance-linked Hiring Bonus Pool',
      postedDate: 'Active Mandate',
      isUrgent: true,
      isFeatured: true,
      clientSector: 'Tech Scale-up & Digital Ecosystems',
      overview: 'Specialized talent search for an impactful Head of Talent Acquisition to scale tech, product, and commercial departments across the UAE and Saudi Arabia.',
      requirements: [
        '8+ years in full-cycle recruitment with at least 3 years leading multi-national recruitment teams',
        'Proven expertise in passive executive headhunting and ATS optimization (Workday, Greenhouse, Ashby)',
        'Deep knowledge of regional talent market nuances in the UAE and KSA (Saudization)',
        'Strong employer branding and recruitment marketing portfolio'
      ],
      responsibilities: [
        'Lead and mentor a team of 8 senior talent acquisition specialists and sourcers',
        'Reduce average time-to-hire by 40% while raising pass-through interview bar',
        'Establish direct talent pipelines for hard-to-fill AI, engineering, and executive roles',
        'Partner with C-suite stakeholders on headcount forecasting and budget allocation'
      ],
      benefits: [
        'Regional travel allowance & executive relocation support',
        'Comprehensive family health & dental cover',
        'Annual wellness & executive coaching subsidy'
      ]
    },
    {
      id: 'ROLE-HR04',
      title: 'Head of Total Rewards, Comp & Benefits (GCC)',
      department: 'People & HR',
      location: 'Dubai, UAE',
      workType: 'Hybrid',
      employmentType: 'Full-time',
      experienceLevel: 'Lead',
      salaryRange: 'AED 40,000 - 55,000 / month',
      equity: 'Annual Corporate Incentive Scheme',
      postedDate: 'Active Mandate',
      isFeatured: false,
      clientSector: 'Enterprise Retail & E-Commerce',
      overview: 'Recruiting seasoned Total Rewards specialists to architect competitive salary bands, short/long-term incentive schemes (STIP/LTIP), and regional benefits harmonisation.',
      requirements: [
        '7+ years specializing in Compensation & Benefits and Total Rewards in multinational firms',
        'Advanced expertise in Mercer / Korn Ferry Hay grading methodologies and salary benchmarking',
        'Proficiency in international payroll compliance, end-of-service gratuity schemes, and pensions',
        'Exceptional financial modeling and executive presentation skills'
      ],
      responsibilities: [
        'Design regional compensation structures aligned with high-inflation and competitive talent markets',
        'Conduct annual market benchmarking and salary review cycles for 2,500+ employees',
        'Manage broker relationships and benefits renewals to optimize corporate spend',
        'Advise leadership on executive package structuring and relocation policies'
      ],
      benefits: [
        'Full medical coverage with international network',
        'Flexible working hours & remote day provisions',
        'Annual performance bonus'
      ]
    },
    {
      id: 'ROLE-HR05',
      title: 'VP of Engineering & Technology Architecture',
      department: 'Engineering',
      location: 'Dubai, UAE / Remote Worldwide',
      workType: 'Hybrid',
      employmentType: 'Executive Search',
      experienceLevel: 'VP / C-Level',
      salaryRange: '$220,000 - $320,000 / year',
      equity: '1.0% - 2.5% Equity Grant',
      postedDate: 'Active Mandate',
      isFeatured: false,
      clientSector: 'AI & Cloud Infrastructure',
      overview: 'Executive search mandate for visionary technology leaders to lead 50+ engineers in distributed systems, microservices, and high-throughput cloud platforms.',
      requirements: [
        '10+ years in software engineering with 5+ years managing senior engineering managers',
        'Deep architectural track record in Go, Python, Kubernetes, and cloud-native microservices',
        'Experience building fault-tolerant systems handling millions of daily transactions',
        'Demonstrated ability to attract and hire world-class engineering talent'
      ],
      responsibilities: [
        'Oversee Core Platform, Data/AI, and Cloud Infrastructure engineering divisions',
        'Partner with Product and Executive leadership on multi-year technical roadmaps',
        'Champion developer productivity, CI/CD automation, and zero-downtime deployments',
        'Drive security, SOC2, and data compliance standards across all systems'
      ],
      benefits: [
        'UAE Golden Visa sponsorship and executive relocation assistance',
        'Full family international medical coverage',
        'Home office setup allowance and high-end hardware budget'
      ]
    },
    {
      id: 'ROLE-HR06',
      title: 'Senior Payroll & HR Operations Manager',
      department: 'People & HR',
      location: 'Dubai, UAE (Business Bay)',
      workType: 'On-site',
      employmentType: 'Full-time',
      experienceLevel: 'Lead',
      salaryRange: 'AED 28,000 - 38,000 / month',
      equity: 'Quarterly Operations Bonus',
      postedDate: 'Active Mandate',
      isUrgent: false,
      isFeatured: true,
      clientSector: 'Logistics & Supply Chain Hub',
      overview: 'Recruiting rigorous HR operations and payroll leads to oversee multi-country payroll execution, visa processing, and HRIS digitalization.',
      requirements: [
        '6+ years managing end-to-end payroll and HR operations for 500+ employees in UAE',
        'Mastery of WPS (Wages Protection System), UAE Labour Law, and Ministry of Human Resources (MOHRE) regulations',
        'Hands-on proficiency with major HRIS/ERP systems (SAP SuccessFactors, Oracle, Bayzat, Zoho)',
        'Impeccable attention to detail and confidential data handling'
      ],
      responsibilities: [
        'Direct monthly payroll calculations, deductions, and WPS compliance with zero error rate',
        'Oversee employee onboarding, visa processing, and offboarding workflows',
        'Implement HR automation tools to streamline leave, attendance, and expense tracking',
        'Generate monthly HR analytics and workforce attrition reports for leadership'
      ],
      benefits: [
        'Competitive tax-free monthly compensation',
        'Private health insurance',
        'Annual flight ticket allowance'
      ]
    }
  ]);

  // Testimonials (from Corporate Clients & Enterprise Partners)
  readonly testimonials = signal<Testimonial[]>([
    {
      id: 't1',
      quote: 'TruePath transformed our talent strategy. When other agencies sent uncalibrated resumes, TruePath presented 3 pre-screened HR leaders who were all exceptional. We closed our CHRO and HRBP within 12 days.',
      author: 'Jonathan Sterling',
      role: 'Chief Technology Officer & Co-Founder',
      company: 'OmniVanguard Software',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      type: 'Client',
      rating: 5
    },
    {
      id: 't2',
      quote: 'TruePath operates with true executive discretion. As a corporate group expanding across Dubai and Riyadh, their B2B model saved our hiring committee weeks of wasted interviews.',
      author: 'Tariq Al-Hashimi',
      role: 'Managing Director & Board Member',
      company: 'Gulf Horizon Holdings',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      type: 'Enterprise Partner',
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

  // Corporate Hiring Requirements (saved in localStorage for persistence)
  readonly applications = signal<HiringRequirement[]>(this.loadStoredRequirements());

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
  submitHiringRequirement(req: Omit<HiringRequirement, 'id' | 'referenceCode' | 'submittedAt' | 'status'>): HiringRequirement {
    const referenceCode = 'TP-REQ-' + Math.floor(100000 + Math.random() * 900000);
    const newReq: HiringRequirement = {
      ...req,
      id: 'req-' + Date.now(),
      referenceCode,
      submittedAt: new Date().toISOString(),
      status: 'Received'
    };

    const updated = [newReq, ...this.applications()];
    this.applications.set(updated);
    this.saveRequirementsToStorage(updated);
    return newReq;
  }

  // Backward compatibility method
  submitCandidateApplication(req: any): HiringRequirement {
    return this.submitHiringRequirement({
      companyName: req.companyName || 'Corporate Client (Online Submission)',
      contactName: req.fullName || req.contactName || 'Hiring Manager',
      workEmail: req.email || req.workEmail,
      phone: req.phone,
      companyLocation: req.location || req.companyLocation || 'Dubai, UAE',
      industry: req.industry || 'Human Resources',
      companySize: req.companySize || '50-250 employees',
      roleTitle: req.desiredRole || req.roleTitle || 'HR Leadership Role',
      discipline: req.industry || 'People & HR',
      headcount: '1 Position',
      seniorityLevel: req.seniorityLevel || 'Senior',
      workModel: req.workTypePreference || 'Hybrid',
      employmentType: 'Permanent Retained Search',
      salaryBudget: req.expectedSalary || req.salaryBudget || 'Market Standard',
      timeframe: req.noticePeriod || 'Within 30 Days',
      jdFileName: req.cvFileName || req.jdFileName,
      jdFileSize: req.cvFileSize || req.jdFileSize,
      keySkills: req.skills || [],
      roleOverview: req.coverNote || req.roleOverview,
      isConfidential: true
    });
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

  private loadStoredRequirements(): HiringRequirement[] {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const data = localStorage.getItem('truepath_company_requirements');
        if (data) return JSON.parse(data);
      }
    } catch (e) {
      console.warn('LocalStorage not available', e);
    }
    return [];
  }

  private saveRequirementsToStorage(reqs: HiringRequirement[]) {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('truepath_company_requirements', JSON.stringify(reqs));
      }
    } catch (e) {
      console.warn('Failed to save to localStorage', e);
    }
  }

  private loadStoredConsultations(): ConsultationRequest[] {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const data = localStorage.getItem('truepath_consultations');
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
        localStorage.setItem('truepath_consultations', JSON.stringify(reqs));
      }
    } catch (e) {
      console.warn('Failed to save to localStorage', e);
    }
  }
}
