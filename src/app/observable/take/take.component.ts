import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, timer } from 'rxjs';
import { map, take, takeLast, takeUntil } from 'rxjs/operators';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css'],
})
export class TakeComponent implements OnInit {
  constructor(private _du: DesignUtilityService) {}

  randomNames = ['Akshay', 'Gajanan', 'Jedhe', 'Angular', 'NC', 'FE'];

  ngOnInit() {
    const nameSource = from(this.randomNames);

    //  EX.1 Take
    nameSource.pipe(take(3)).subscribe((res) => {
      // console.log(res);
      this._du.print(res, 'elContainer1');
    });

    //  EX.2 TakeLast
    nameSource.pipe(takeLast(3)).subscribe((res) => {
      // console.log(res);
      this._du.print(res, 'elContainer2');
    });

    //  EX.3 TakeUntil
    const source = interval(1000);
    let condition1 = timer(5000);
    let condition2 = fromEvent(document, 'click');

    source
      .pipe(
        map((data) => 'Number ' + data),
        takeUntil(condition2)
      )
      .subscribe((res) => {
        console.log(res);
        this._du.print(res, 'elContainer3');
      });
  }
}
