import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css'],
})
export class TapComponent implements OnInit {
  constructor(private _du: DesignUtilityService) {}

  ngOnInit() {
    //  Ex.1
    const arr = ['Akshay', 'Gajanan', 'Jedhe'];
    const source = interval(1500);
    let obserableSubscription: Subscription;
    obserableSubscription = source
      .pipe(
        map((data) => {
          arr[data];
          if (data == 4) {
            obserableSubscription.unsubscribe();
          }
        })
      )
      .subscribe((res) => {
        console.log(res);
        this._du.print(res, 'elContainer');
      });
  }
}
