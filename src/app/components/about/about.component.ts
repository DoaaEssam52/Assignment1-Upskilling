import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  cardsData = [
    {
      aboutColor: '#2c98f0',
      iconClass: 'far fa-lightbulb',
      title: 'Graphic Design',
    },
    {
      aboutColor: '#ec5453',
      iconClass: 'fas fa-globe',
      title: 'Web Design',
    },
    { aboutColor: '#f9bf3f', iconClass: 'fas fa-cubes', title: 'Software' },
    {
      aboutColor: '#a84cb8',
      iconClass: 'fas fa-mobile-screen-button',
      title: 'Application',
    },
  ];
}
