import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  blogs = [
    {
      imgSrc: '../../assets/images/blog1.webp',
      date: 'APRIL 14, 2018 | WEB DESIGN |  4',
      title: 'RENOVATING NATIONAL GALLERY',
      description:
        'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    },
    {
      imgSrc: '../../assets/images/blog-2.webp',
      date: 'APRIL 14, 2018 | WEB DESIGN |  4',
      title: 'WORDPRESS FOR A BEGINNER',
      description:
        'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    },
    {
      imgSrc: '../../assets/images/blog-3.webp',
      date: 'APRIL 14, 2018 | WEB DESIGN |  4',
      title: 'MAKE WEBSITE FROM SCRATCH',
      description:
        'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    },
  ];
}
