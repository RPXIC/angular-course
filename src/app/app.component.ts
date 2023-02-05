import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showImg = true;
  imgParent = '';

  onLoaded(img: string) {
    console.log('log father', img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }
}
