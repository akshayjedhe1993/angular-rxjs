import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css'],
})
export class TapComponent implements OnInit {
  myColor: string;
  constructor(private _du: DesignUtilityService) {}

  ngOnInit() {
    const source = interval(1500);

    //  Ex.1
    const arr = ['Akshay', 'Gajanan', 'Jedhe'];
    let obserableSubscription: Subscription;
    obserableSubscription = source
      .pipe(
        tap((data) => {
          // console.log('Tap before ' + data);
          if (data == 3) {
            obserableSubscription.unsubscribe();
          }
        }),
        map((data) => arr[data])
        // tap((data) => console.log('Tap after ' + data))
      )
      .subscribe((res) => {
        // console.log(res);
        this._du.print(res, 'elContainer');
      });

    //  Ex.2
    const colors = [
      'Red',
      'Blue',
      'Orange',
      'Pink',
      'Black',
      'Yellow',
      'Purple',
      'Green',
    ];
    let obserableSubscription2: Subscription;
    obserableSubscription2 = source
      .pipe(
        tap((data) => {
          // console.log('Tap ' + data);
          this.myColor = colors[data];
          if (data == 8) {
            obserableSubscription2.unsubscribe();
          }
        }),
        map((data) => colors[data])
      )
      .subscribe((res) => {
        // console.log(res);
        this._du.print(res, 'elContainer2');
      });
  }
}
