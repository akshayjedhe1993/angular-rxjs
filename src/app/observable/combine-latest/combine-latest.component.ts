import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { combineLatest, fromEvent } from 'rxjs';
import { map, pluck, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.css'],
})
export class CombineLatestComponent implements AfterViewInit {
  nameSource = ['Akshay', 'Gajanan', 'Jedhe', 'Pooja', 'Sambhaji', 'Randive'];
  colorSource = ['red', 'green', 'blue', 'yellow', 'violet', 'purple'];

  @ViewChild('name') name: ElementRef;
  @ViewChild('color') color: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    const nameObs = fromEvent<any>(this.name.nativeElement, 'change').pipe(
      map((event) => event.target.value)
    );

    const colorObs = fromEvent<any>(this.color.nativeElement, 'change').pipe(
      pluck('target', 'value')
    );

    //  Ex.1 combineLatest
    combineLatest(nameObs, colorObs).subscribe(([name, color]) => {
      // console.log(name, color);
      this.createBox(name, color, 'elContainer1');
    });

    //  Ex.2 WithLatestFrom
    //  master -> nameObs
    //  slave -> colorObs
    nameObs.pipe(withLatestFrom(colorObs)).subscribe(([name, color]) => {
      // console.log(name, color);
      this.createBox(name, color, 'elContainer2');
    });
  }

  createBox(name, color, containerId) {
    let el = document.createElement('div');
    el.innerText = name;
    el.setAttribute('class', color);
    document.getElementById(containerId).appendChild(el);
  }
}
