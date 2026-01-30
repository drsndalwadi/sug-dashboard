import { CommonModule } from '@angular/common';
import { Component, computed, effect, input } from '@angular/core';

@Component({
  selector: 'sug-icon',
  imports: [CommonModule],
  templateUrl: './sug-icon.component.html',
  styleUrl: './sug-icon.component.scss'
})

// This component is only for Icons, hover and active state code belongs to sidebar component
export class SugIconComponent {

  icon = input<string>();
  
  // #919e55 - is a default icon color
  color = input<string | undefined>();
  default_icon_color = computed( () => this.color() ?? '#919e55');
  
  // default size = 32px = 2rem
  size = input<string | undefined>('2rem');

  // Default set to 'SOLID' => Optionally added = not used to accept input in demo
  style = input<'solid' | 'regular' | 'brands'>('regular');

  // Combined above signals to make a list of classes
  iconClasses = computed(() => {
    
    return `fa fa-${this.icon()} ${this.style()}`;
  })

  constructor() {
    effect(()=> {
      // console.log('From Icon Component: ' + this.color());
    });
  }

}
