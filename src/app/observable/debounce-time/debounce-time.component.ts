import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css'],
})
export class DebounceTimeComponent implements AfterViewInit {
  @ViewChild('myInput') myInput: ElementRef;
  @ViewChild('myInput2') myInput2: ElementRef;
  reqData = null;
  reqData2 = null;

  constructor() {}

  ngAfterViewInit() {
    //  Ex.1 DebounceTime
    const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
      map((event) => event.target.value),
      debounceTime(1000)
    );
    searchTerm.subscribe((res) => {
      this.reqData = res;
      console.log(res);
      setTimeout(() => {
        this.reqData = null;
      }, 2000);
    });

    //  Ex.2 DistinctUntilChanged
    const searchTerm2 = fromEvent<any>(
      this.myInput2.nativeElement,
      'keyup'
    ).pipe(
      map((event) => event.target.value),
      debounceTime(1000),
      distinctUntilChanged()
    );
    searchTerm2.subscribe((res) => {
      this.reqData2 = res;
      console.log(res);
      setTimeout(() => {
        this.reqData2 = null;
      }, 2000);
    });
  }
}
