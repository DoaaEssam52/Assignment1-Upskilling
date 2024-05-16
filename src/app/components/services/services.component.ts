import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  servicesCards = [
    {
      skillColor: 'green',
      iconClass: 'far fa-lightbulb',
      title: 'INNOVATIVE IDEAS',
      description:
        'Separated they live in Bookmarksgrove right at the coast of the Semantics',
    },
    {
      skillColor: '#ec5453',
      iconClass: 'fas fa-cubes',
      title: 'SOFTWARE',
      description:
        'Separated they live in Bookmarksgrove right at the coast of the Semantics',
    },
    {
      skillColor: '#f9bf3f',
      iconClass: 'fas fa-mobile-screen-button',
      title: 'APPLICATION',
      description:
        'Separated they live in Bookmarksgrove right at the coast of the Semantics',
    },
    {
      skillColor: '#a84cb8',
      iconClass: 'fas fa-layer-group',
      title: 'GRAPHIC DESIGN',
      description:
        'Separated they live in Bookmarksgrove right at the coast of the Semantics',
    },
    {
      skillColor: '#2fa499',
      iconClass: 'fas fa-cubes',
      title: 'SOFTWARE',
      description:
        'Separated they live in Bookmarksgrove right at the coast of the Semantics',
    },
    {
      skillColor: 'red',
      iconClass: 'fas fa-mobile-screen-button',
      title: 'Application',
      description:
        'Separated they live in Bookmarksgrove right at the coast of the Semantics',
    },
  ];

  analytics = [
    {
      title: 'Cups of coffe',
      count: 309,
    },
    {
      title: 'PROJECTS',
      count: 356,
    },
    {
      title: 'CLIENTS',
      count: 30,
    },
    {
      title: 'PARTNERS',
      count: 10,
    },
  ];
}
