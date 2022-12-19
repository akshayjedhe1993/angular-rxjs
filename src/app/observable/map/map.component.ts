import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  sub1: Subscription;
  constructor() {}

  ngOnInit() {
    //  Ex.1
    const broadcastVideo = interval(1000);

    this.sub1 = broadcastVideo
      .pipe(map((data) => 'Video ' + data))
      .subscribe((res) => {
        console.log(res);
      });

    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 10000);
  }
}
