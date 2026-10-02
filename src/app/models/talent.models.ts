export interface JobPosition {
  id: string;
  title: string;
  department: 'Engineering' | 'Executive' | 'Product' | 'Data & AI' | 'Finance' | 'People & HR';
  location: string;
  workType: 'Remote' | 'Hybrid' | 'On-site';
  employmentType: 'Full-time' | 'Contract' | 'Executive Search';
  experienceLevel: 'Senior' | 'Lead' | 'Director' | 'VP / C-Level' | 'Principal';
  salaryRange: string;
  equity?: string;
  postedDate: string;
  isUrgent?: boolean;
  isFeatured?: boolean;
  overview: string;
  requirements: string[];
  benefits: string[];
  responsibilities: string[];
  clientSector: string;
}

export interface RecruitmentService {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  keyFeatures: string[];
  timeline: string;
  idealFor: string;
  stats: { metric: string; label: string };
  badge: string;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  clientType: string;
  industry: string;
  location: string;
  challenge: string;
  solution: string;
  outcomes: {
    metric: string;
    label: string;
    detail: string;
  }[];
  rolesPlaced: string[];
  timeframe: string;
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  type: 'Client' | 'Placed Candidate';
  rating: number;
}

export interface CandidateApplication {
  id: string;
  referenceCode: string;
  fullName: string;
  email: string;
  phone: string;
  currentRole: string;
  desiredRole: string;
  industry: string;
  experienceYears: number;
  seniorityLevel: string;
  currentSalary: string;
  expectedSalary: string;
  workTypePreference: string;
  noticePeriod: string;
  location: string;
  linkedInUrl?: string;
  portfolioUrl?: string;
  skills: string[];
  cvFileName: string;
  cvFileSize: string;
  coverNote?: string;
  submittedAt: string;
  status: 'Received' | 'Under Review' | 'Matched with Opportunity';
}

export interface ConsultationRequest {
  id: string;
  fullName: string;
  companyName: string;
  workEmail: string;
  phone: string;
  inquiryType: 'Hire Talent' | 'Executive Search' | 'Candidate Application' | 'RPO / Strategic Partnership';
  rolesCount: string;
  timeframe: string;
  budgetRange: string;
  message: string;
  preferredContact: 'Email' | 'Phone' | 'Virtual Meeting';
  createdAt: string;
}
