import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  private readonly toastService = inject(ToastService);
  newsletterEmail = '';

  subscribeNewsletter() {
    if (!this.newsletterEmail || !this.newsletterEmail.includes('@')) {
      this.toastService.warning('Valid Email Required', 'Please enter a valid email address to subscribe.');
      return;
    }
    this.toastService.success('Subscribed Successfully!', 'You are now subscribed to TruePath HR Insights & GCC Talent Trends.');
    this.newsletterEmail = '';
  }
}
