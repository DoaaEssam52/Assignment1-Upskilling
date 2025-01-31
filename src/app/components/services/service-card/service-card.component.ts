import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss'],
})
export class ServiceCardComponent {
  @Input() card: {
    skillColor: string;
    iconClass: string;
    title: string;
    description: string;
  } = {
    skillColor: '',
    iconClass: '',
    title: '',
    description: '',
  };
}
