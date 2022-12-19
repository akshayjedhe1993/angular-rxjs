import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  sub1: Subscription;
  sub2: Subscription;
  msg1;
  msg2;
  constructor(private _designUtility: DesignUtilityService) {}

  ngOnInit() {
    const broadcastVideo = interval(1000);

    //  Ex.1 'Video'+ Data
    this.sub1 = broadcastVideo
      .pipe(map((data) => 'Video ' + data))
      .subscribe((res) => {
        // console.log(res);
        this.msg1 = res;
      });

    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 10000);

    //  Ex.2
    this.sub2 = broadcastVideo
      .pipe(map((data) => data + 10))
      .subscribe((res) => {
        // console.log(res);
        this.msg2 = res;
      });

    setTimeout(() => {
      this.sub2.unsubscribe();
    }, 10000);

    //  Ex.3
    const members = from([
      { id: 1, name: 'Akshay' },
      { id: 2, name: 'Gajanan' },
      { id: 3, name: 'Jedhe' },
    ]);

    members.pipe(map((data) => data.name)).subscribe((res) => {
      console.log(res);
      this._designUtility.print(res, 'elContainer');
    });
  }
}
