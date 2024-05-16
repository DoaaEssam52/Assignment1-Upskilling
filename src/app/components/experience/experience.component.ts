import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  experienceData = [
    {
      title: 'Full Stack Developer',
      date: '2017-2018',
      content: `Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.`,
    },
    {
      title: 'Front End Developer at Google Company',
      date: '2017-2018',
      content: `Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.`,
    },
    {
      title: 'System Analyst',
      date: '2017-2018',
      content: `Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.`,
    },
    {
      title: 'Creative Designer',
      date: '2017-2018',
      content: `Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.`,
    },
    {
      title: 'UI/UX Designer at Envato',
      date: '2017-2018',
      content: `Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.`,
    },
  ];
}
