import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent {
  @Input() title: string = '';
  @Input() percentage: number = 0;
  @Input() progressColor: string = '';
}
