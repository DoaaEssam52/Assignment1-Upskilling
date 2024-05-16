import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  workTabs = [
    { title: 'Graphic Design', routerLink: '/home' },
    { title: 'Web Design', routerLink: '/home' },
    { title: 'Software', routerLink: '/home' },
    { title: 'Apps', routerLink: '/home' },
  ];

  workData = [
    {
      imgSrc: '../../../assets/images/img-1.jpg.webp',
    },
    {
      imgSrc: '../../../assets/images/img-2.jpg.webp',
    },
    {
      imgSrc: '../../../assets/images/img-3.jpg.webp',
    },
    {
      imgSrc: '../../../assets/images/img-4.jpg.webp',
    },
    {
      imgSrc: '../../../assets/images/img-5.jpg.webp',
    },
    {
      imgSrc: '../../../assets/images/img-6.jpg.webp',
    },
  ];

  activeTab = 0;
}
