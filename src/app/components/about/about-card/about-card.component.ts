import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss'],
})
export class AboutCardComponent {
  @Input() card: { aboutColor: string; iconClass: string; title: string } = {
    aboutColor: '',
    iconClass: '',
    title: '',
  };
}
