import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent {
  @Input() card: {
    imgSrc: string;
    date: string;
    title: string;
    description: string;
  } = {
    imgSrc: '',
    date: '',
    title: '',
    description: '',
  };
}
