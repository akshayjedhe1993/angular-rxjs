import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { forkJoin, fromEvent, zip } from 'rxjs';
import { map, pluck, take, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.css'],
})
export class ZipComponent implements AfterViewInit {
  nameSource = ['Akshay', 'Gajanan', 'Jedhe', 'Pooja', 'Sambhaji', 'Randive'];
  colorSource = ['red', 'green', 'blue', 'yellow', 'violet', 'purple'];

  @ViewChild('name') name: ElementRef;
  @ViewChild('color') color: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    const nameObs = fromEvent<any>(this.name.nativeElement, 'change').pipe(
      map((event) => event.target.value),
      take(4)
    );

    const colorObs = fromEvent<any>(this.color.nativeElement, 'change').pipe(
      pluck('target', 'value'),
      take(3)
    );

    //  Ex.1 zip
    zip(nameObs, colorObs).subscribe(([name, color]) => {
      // console.log(name, color);
      this.createBox(name, color, 'elContainer1');
    });

    //  Ex.2 forkJoin
    forkJoin(nameObs, colorObs).subscribe(([name, color]) => {
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
