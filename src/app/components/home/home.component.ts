import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  slides = [
    {
      imgSrc:
        'https://preview.colorlib.com/theme/jackson/images/img_bg_2.jpg.webp',
      title: 'I am',
      subtitle: 'a Designer',
      desciption: '100% html5 bootstrap templates Made by colorlib.com',
      buttonText: 'View Portfolio',
    },
    {
      imgSrc:
        'https://preview.colorlib.com/theme/jackson/images/img_bg_1.jpg.webp',
      title: 'Hi!',
      subtitle: "I'm Jackson",
      desciption: '100% html5 bootstrap templates Made by colorlib.com',
      buttonText: 'Download CV',
    },
  ];
}
