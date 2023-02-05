import {
  Component,
  Input,
  Output,
  EventEmitter,
  // OnChanges,
  // OnInit,
  // OnDestroy,
  // AfterViewInit,
  // SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
/* implements OnChanges, OnInit, AfterViewInit, OnDestroy */
export class ImgComponent {
  img = '';

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    // console.log('change just img =>', this.img);
  }
  @Input() alt = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = '../../../assets/images/default.png';
  // counter = 0;
  // _interval: number | undefined;

  constructor() {
    // before render
    // ❌ async -- once time
    // console.log('contructor', 'imgValue =>', this.img);
  }

  // ngOnChanges(changes: SimpleChanges) {
  // before render
  // changes inputs -- times
  // console.log('onChanges', 'imgValue =>', this.img);
  // console.log('changes', changes);
  // }

  // ngOnInit() {
  // before render
  // ✅ async -- fetch -- once time
  // console.log('ngOnInit', 'imgValue =>', this.img);
  // this._interval = window.setInterval(() => {
  //   this.counter += 1;
  //   console.log('counter');
  // }, 1000);
  // }

  // ngAfterViewInit() {
  // after render
  // handler children
  // console.log('afterViewInit');
  // }

  // ngOnDestroy() {
  // delete -- once time
  // console.log('onDestroy');
  // window.clearInterval(this._interval);
  // }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    // console.log('log child');
    this.loaded.emit(this.img);
  }
}
