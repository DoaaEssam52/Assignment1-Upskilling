import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  educationData = [
    {
      title: 'Master Degree Graphic Design',
      content: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.`,
    },
    {
      title: 'Bachelor Degree of Computer Science',
      content: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.`,
    },
    {
      title: 'Diploma in Information Technology',
      content: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.`,
    },
    {
      title: 'Diploma in Information Technology',
      content: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.`,
    },
    {
      title: 'High School Secondary Education',
      content: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.`,
    },
  ];
}
