import { Component, input } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'sug-funnel-card',
  imports: [CardModule],
  templateUrl: './sug-card.component.html',
  styleUrl: './sug-card.component.scss'
})

export class SugCardComponent {

  image = input<string>();

  // can't use title only as title is used by primeNg
  title = input<string>();
  
  desc = input<string>();
  
  navigation_url = input<string>();
}
