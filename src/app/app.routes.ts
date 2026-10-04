import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ServicesComponent } from './pages/services/services';
import { IndustriesComponent } from './pages/industries/industries';
import { BlogsComponent } from './pages/blogs/blogs';
import { PortfolioComponent } from './pages/portfolio/portfolio';
import { ContactComponent } from './pages/contact/contact';
import { AboutComponent } from './pages/about/about';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'TruePath HR Solutions | B2B Executive Search & Recruitment' },
  { path: 'industries', component: IndustriesComponent, title: 'Industries We Serve | TruePath B2B Recruitment' },
  { path: 'sectors', redirectTo: 'industries', pathMatch: 'full' },
  { path: 'jobs', redirectTo: 'industries', pathMatch: 'full' },
  { path: 'services', component: ServicesComponent, title: 'Corporate HR Solutions & Practices | TruePath Ventures' },
  { path: 'portfolio', component: PortfolioComponent, title: 'Client Portfolio & Case Studies | TruePath Ventures' },
  { path: 'clients', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'case-studies', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'blogs', component: BlogsComponent, title: 'HR & Executive Recruitment Blogs | TruePath Insights' },
  { path: 'insights', redirectTo: 'blogs', pathMatch: 'full' },
  { path: 'submit-cv', redirectTo: 'contact', pathMatch: 'full' },
  { path: 'submit-requirement', redirectTo: 'contact', pathMatch: 'full' },
  { path: 'hire-talent', redirectTo: 'contact', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, title: 'Looking to Hire & Dubai HQ | TruePath Ventures' },
  { path: 'about', component: AboutComponent, title: 'About Us & Company Profile | TruePath Ventures' },
  { path: '**', redirectTo: '' }
];
