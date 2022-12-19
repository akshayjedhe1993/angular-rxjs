import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css'],
})
export class OfFromComponent implements OnInit {
  objMsg;
  constructor(private _designUtility: DesignUtilityService) {}

  ngOnInit() {
    //  OF
    const obj1 = of('Akshay', 'Gajanan', 'Jedhe');
    obj1.subscribe((res) => {
      this._designUtility.print(res, 'elContainer1');
    });

    const obj2 = of({
      firstName: 'Akshay',
      middleName: 'Gajanan',
      lastName: 'Jedhe',
    });
    obj2.subscribe((res) => {
      this.objMsg = res;
    });

    //  FROM - Array
    let arr = ['Akshay', 'Gajanan', 'Jedhe'];
    const obj3 = from(arr);
    obj3.subscribe((res) => {
      this._designUtility.print(res, 'elContainer3');
    });

    //  FROM - Promise
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise Resolved');
      }, 3000);
    });

    const obj4 = from(promise);
    obj4.subscribe((res) => {
      this._designUtility.print(res, 'elContainer4');
    });

    //  FROM - String
    const obj5 = from('Welcome all');
    obj5.subscribe((res) => {
      this._designUtility.print(res, 'elContainer5');
    });
  }
}
