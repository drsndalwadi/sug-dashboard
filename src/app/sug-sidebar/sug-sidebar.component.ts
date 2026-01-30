import { Component, input, signal } from '@angular/core';
import { SugIconComponent } from '../sug-icon/sug-icon.component';
import { NavBarIcon } from '../model/navbar-icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sug-left-nav',
  imports: [SugIconComponent, CommonModule],
  templateUrl: './sug-sidebar.component.html',
  styleUrl: './sug-sidebar.component.scss',
  standalone: true
})

export class SugSidebarComponent {

  // CreateIcon created here as it requires custom treatment
  createIcon : NavBarIcon = { title: 'Create', icon: 'circle-plus', navigation_link: '#'};

  // To show/hide create icon
  displayCreateIcon = input<boolean>(true);

  // To enabled/disabled create icon
  create_disabled = input<boolean>();

  // Stores incoming Icons metadata
  iconLinks = input<NavBarIcon[]>([]);
  
  // To mark icon selected
  selectedIcon = signal<NavBarIcon | null>(null);

  // Based on isDisabled set the icon color
  getIconColor(icon: NavBarIcon) {
    return icon.isDisabled ? '#BCBEC0' : icon.color;
  }

}
