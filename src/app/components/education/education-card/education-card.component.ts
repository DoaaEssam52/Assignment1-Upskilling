import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.scss'],
})
export class EducationCardComponent {
  @Input() cardIndex: number = 0;
  @Input() card: { title: string; content: string } = {
    title: 'string,',
    content: 'string,',
  };
}
