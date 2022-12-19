import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css'],
})
export class CustomComponent implements OnInit, OnDestroy {
  techStatus;
  techStatus2;
  names;
  namesStatus;
  subs2: Subscription;
  constructor(private _designUtility: DesignUtilityService) {}

  ngOnInit() {
    //   Ex.1 (Manual)
    const cusObs1 = Observable.create((observer) => {
      setTimeout(() => {
        observer.next('Angular');
      }, 1000);
      setTimeout(() => {
        observer.next('JavaScript');
        // observer.error(new Error('limit exceed'));
      }, 2000);
      setTimeout(() => {
        observer.next('TypeScript');
        observer.complete();
      }, 3000);
      setTimeout(() => {
        observer.next('HTML');
      }, 4000);
      setTimeout(() => {
        observer.next('CSS');
      }, 5000);
    });

    cusObs1.subscribe(
      (data) => {
        this._designUtility.print(data, 'elContainer1');
      },
      (error) => {
        this.techStatus = 'error';
      },
      () => {
        this.techStatus = 'completed';
      }
    );

    // .subscribe(data, error, completion)

    //   Ex.2 (Custom Interval Observable)
    const arr2 = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'];
    const cusObs2 = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(arr2[count]);

        if (count >= 2) {
          observer.error('error emit.');
        }
        if (count >= 4) {
          observer.complete();
        }
        count++;
      }, 1000);
    });

    this.subs2 = cusObs2.subscribe(
      (data) => {
        this._designUtility.print(data, 'elContainer2');
      },
      (error) => {
        this.techStatus2 = 'error';
      },
      () => {
        this.techStatus2 = 'completed';
      }
    );

    //   Ex.3 (Ramdom Names)
    const arr3 = ['Akshay', 'Gajanan', 'Jedhe', 'Pooja', 'Temp'];
    const cusObs3 = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(arr3[count]);

        if (count >= 2) {
          // observer.error('error emit.');
        }
        if (count >= 4) {
          observer.complete();
        }
        count++;
      }, 1000);
    });

    cusObs3.subscribe(
      (data) => {
        this.names = data;
      },
      (error) => {
        this.namesStatus = 'error';
      },
      () => {
        this.namesStatus = 'completed';
      }
    );
  }

  ngOnDestroy() {
    this.subs2.unsubscribe();
  }
}
