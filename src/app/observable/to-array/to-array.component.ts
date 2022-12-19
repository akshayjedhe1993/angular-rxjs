import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css'],
})
export class ToArrayComponent implements OnInit {
  users = [
    { name: 'Akshay', skills: 'Java' },
    { name: 'Pooja', skills: 'Angular' },
  ];
  constructor() {}

  sourceSub: Subscription;

  ngOnInit() {
    //  Ex. 1
    const source1 = interval(1000);
    this.sourceSub = source1.pipe(take(5), toArray()).subscribe((res) => {
      console.log(res);
    });

    //  Ex. 2
    const source2 = from(this.users);
    source2.pipe(toArray()).subscribe((res) => {
      console.log(res);
    });

    //  Ex. 3
    const source3 = of('Akshay', 'Gajanan', 'Jedhe');
    source3.pipe(toArray()).subscribe((res) => {
      console.log(res);
    });
  }
}
