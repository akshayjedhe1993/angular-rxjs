import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css'],
})
export class DebounceTimeComponent implements AfterViewInit {
  @ViewChild('myInput') myInput: ElementRef;
  reqData = null;

  constructor() {}

  ngAfterViewInit() {
    const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
      map(event => event.target.value)
    );
    searchTerm.subscribe((res) => {
      this.reqData = res;
      console.log(res);
      setTimeout(() => {
        this.reqData = null;
      },1000);
    });
  }
}
