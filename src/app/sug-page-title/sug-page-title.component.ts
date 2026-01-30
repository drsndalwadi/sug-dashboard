import { Component, input } from '@angular/core';

@Component({
  selector: 'sug-page-title',
  imports: [],
  templateUrl: './sug-page-title.component.html',
  styleUrl: './sug-page-title.component.scss'
})

export class SugPageTitleComponent {
  
  title = input<string>();
  
  sub_title = input<string>();
}
