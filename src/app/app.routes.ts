import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ServicesComponent } from './pages/services/services';
import { CaseStudiesComponent } from './pages/case-studies/case-studies';
import { JobsComponent } from './pages/jobs/jobs';
import { SubmitCvComponent } from './pages/submit-cv/submit-cv';
import { ContactComponent } from './pages/contact/contact';
import { AboutComponent } from './pages/about/about';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'TruePath HR Solutions | Executive Search & Recruitment' },
  { path: 'services', component: ServicesComponent, title: 'HR Solutions & Practices | TruePath Ventures' },
  { path: 'case-studies', component: CaseStudiesComponent, title: 'Case Studies & Placement Portfolio | TruePath' },
  { path: 'jobs', component: JobsComponent, title: 'Open HR Positions & Executive Roles | TruePath' },
  { path: 'submit-cv', component: SubmitCvComponent, title: 'Register Your CV | TruePath Confidential Network' },
  { path: 'contact', component: ContactComponent, title: 'Looking to Hire & Dubai HQ | TruePath Ventures' },
  { path: 'about', component: AboutComponent, title: 'About Us & Company Profile | TruePath Ventures' },
  { path: '**', redirectTo: '' }
];
