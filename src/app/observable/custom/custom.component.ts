import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css'],
})
export class CustomComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    //   Ex.1 (Manual)
    const cusObs1 = Observable.create((observer) => {
      setTimeout(() => {
        observer.next('Data Emit 1');
      }, 1000);
      setTimeout(() => {
        observer.next('Data Emit 2');
      }, 1000);
      setTimeout(() => {
        observer.next('Data Emit 3');
      }, 1000);
    });

    cusObs1.subscribe((res) => {
      console.log(res);
    });
  }
}
