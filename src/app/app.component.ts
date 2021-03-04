import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'website-things';
  opened: boolean;
  animate = false;

  toggleAnimate() {
    this.animate = !this.animate;
  }
}
