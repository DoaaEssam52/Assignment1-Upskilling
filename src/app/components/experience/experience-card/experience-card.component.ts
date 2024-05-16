import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss'],
})
export class ExperienceCardComponent {
  @Input() card: { title: string; date: string; content: string } = {
    title: '',
    date: '',
    content: '',
  };
}
