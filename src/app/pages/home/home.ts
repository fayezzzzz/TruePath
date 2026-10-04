import { Component, inject, signal, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TalentService } from '../../services/talent.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements OnInit {
  readonly talentService = inject(TalentService);
  private readonly router = inject(Router);

  searchTitle = '';
  searchDiscipline = '';
  readonly scrollY = signal(0);
  readonly isLoaded = signal(false);

  ngOnInit() {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        this.isLoaded.set(true);
      }, 50);
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (typeof window !== 'undefined') {
      this.scrollY.set(window.scrollY || 0);
    }
  }

  get heroZoomTransform(): string {
    // Starts at 1, smoothly zooms in as user scrolls down
    const scale = 1 + Math.min(this.scrollY() * 0.00035, 0.15);
    return `scale(${scale})`;
  }

  executeSearch() {
    this.talentService.updateSearchFilter({
      query: this.searchTitle,
      department: this.searchDiscipline,
      workType: ''
    });
    this.router.navigate(['/jobs']);
  }
}
