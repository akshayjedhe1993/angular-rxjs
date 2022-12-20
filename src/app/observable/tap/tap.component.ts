import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css'],
})
export class TapComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    //  Ex.1
    const arr = ['Akshay', 'Gajanan', 'Jedhe'];
    const source = interval(1500);
    source.pipe(map((data) => arr[data])).subscribe((res) => {
      console.log(res);
    });
  }
}
