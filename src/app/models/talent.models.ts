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

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  publishedDate: string;
  readTime: string;
  coverImage: string;
  excerpt: string;
  content: string[];
  tags: string[];
  isFeatured?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  type: 'Client' | 'Enterprise Partner';
  rating: number;
}

export interface HiringRequirement {
  id: string;
  referenceCode: string;
  companyName: string;
  contactName: string;
  workEmail: string;
  phone: string;
  companyLocation: string;
  industry: string;
  companySize: string;
  roleTitle: string;
  discipline: string;
  headcount: string;
  seniorityLevel: string;
  workModel: string;
  employmentType: string;
  salaryBudget: string;
  timeframe: string;
  jdFileName?: string;
  jdFileSize?: string;
  keySkills: string[];
  roleOverview?: string;
  isConfidential: boolean;
  submittedAt: string;
  status: 'Received' | 'Under Review' | 'Partner Assigned';
}

// Backward compatibility alias
export type CandidateApplication = HiringRequirement;

export interface ConsultationRequest {
  id: string;
  fullName: string;
  companyName: string;
  workEmail: string;
  phone: string;
  inquiryType: 'Hire Talent' | 'Executive Search' | 'Enterprise Consultation' | 'RPO / Strategic Partnership';
  rolesCount: string;
  timeframe: string;
  budgetRange: string;
  message: string;
  preferredContact: 'Email' | 'Phone' | 'Virtual Meeting';
  createdAt: string;
}
