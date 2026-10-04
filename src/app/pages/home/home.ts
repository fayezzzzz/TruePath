import { Component, inject } from '@angular/core';
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
export class HomeComponent {
  readonly talentService = inject(TalentService);
  private readonly router = inject(Router);

  searchTitle = '';
  searchDiscipline = '';

  executeSearch() {
    this.talentService.updateSearchFilter({
      query: this.searchTitle,
      department: this.searchDiscipline,
      workType: ''
    });
    this.router.navigate(['/jobs']);
  }
}
