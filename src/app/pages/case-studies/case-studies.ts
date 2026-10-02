import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TalentService } from '../../services/talent.service';

@Component({
  selector: 'app-case-studies',
  imports: [CommonModule, RouterModule],
  templateUrl: './case-studies.html',
  styleUrl: './case-studies.scss'
})
export class CaseStudiesComponent {
  readonly talentService = inject(TalentService);
}
