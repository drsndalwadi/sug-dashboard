import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'sug-adverts',
  imports: [CommonModule],
  templateUrl: './sug-adverts.component.html',
  styleUrl: './sug-adverts.component.scss'
})

export class SugAdvertsComponent {

  is_premium_user =  signal<boolean>(false);
  
  closeAd() {
    this.is_premium_user.set(true);
  }

}
