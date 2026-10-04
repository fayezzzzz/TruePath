import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  readonly isSideNavOpen = signal(false);

  constructor(private router: Router) {
    // Automatically close side nav on navigation
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.closeSideNav();
    });
  }

  toggleSideNav() {
    this.isSideNavOpen.update(v => !v);
    this.updateBodyScrollLock(this.isSideNavOpen());
  }

  openSideNav() {
    this.isSideNavOpen.set(true);
    this.updateBodyScrollLock(true);
  }

  closeSideNav() {
    this.isSideNavOpen.set(false);
    this.updateBodyScrollLock(false);
  }

  @HostListener('window:keydown.escape')
  onEscapePress() {
    if (this.isSideNavOpen()) {
      this.closeSideNav();
    }
  }

  private updateBodyScrollLock(lock: boolean) {
    if (typeof document !== 'undefined') {
      if (lock) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }
}
