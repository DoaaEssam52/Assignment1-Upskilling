import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills = [
    { progressColor: '#2c98f0', title: 'Photoshop', percentage: 75 },
    { progressColor: '#ec5453', title: 'jQuery', percentage: 60 },
    { progressColor: '#f9bf3f', title: 'HTML5', percentage: 85 },
    { progressColor: '#a84cb8', title: 'CSS3', percentage: 90 },
    { progressColor: '#2fa499', title: 'WordPress', percentage: 70 },
    { progressColor: '#4054b2', title: 'SEO', percentage: 80 },
  ];
}
