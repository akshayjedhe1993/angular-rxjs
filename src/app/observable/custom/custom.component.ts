import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css'],
})
export class CustomComponent implements OnInit {
  techStatus;
  constructor(private _designUtility: DesignUtilityService) {}

  ngOnInit() {
    //   Ex.1 (Manual)
    const cusObs1 = Observable.create((observer) => {
      setTimeout(() => {
        observer.next('Angular');
      }, 1000);
      setTimeout(() => {
        observer.next('JavaScript');
      }, 2000);
      setTimeout(() => {
        observer.next('TypeScript');
      }, 3000);
      setTimeout(() => {
        observer.next('HTML');
        // observer.error(new Error('limit exceed'));
      }, 4000);
      setTimeout(() => {
        observer.next('CSS');
        observer.complete();
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
  }
}
