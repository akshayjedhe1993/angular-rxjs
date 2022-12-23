import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import {
  map,
  delay,
  switchAll,
  switchMap,
  concatMap,
  mergeMap,
} from 'rxjs/operators';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css'],
})
export class SwitchMapComponent implements OnInit {
  constructor(private _du: DesignUtilityService) {}

  ngOnInit() {
    //  map + switchAll = switchMap
    const source = from(['Tech', 'Comedy', 'News']);

    //  Ex.* Map
    source.pipe(map((res) => this.getData(res))).subscribe((res) => {
      // res.subscribe(res2 => {
      //   console.log(res2);
      this._du.print(res, 'elContainer*');
      // })
    });

    //  Ex.1 mergeMap
    source.pipe(mergeMap((res) => this.getData(res))).subscribe((res) => {
      //   console.log(res2);
      this._du.print(res, 'elContainer1');
    });

    //  Ex.* Map + switchAll
    source
      .pipe(
        map((res) => this.getData(res)),
        switchAll()
      )
      .subscribe((res) => {
        // console.log(res);
        this._du.print(res, 'elContainer*');
      });

    //  Ex.2 concatMap
    source.pipe(concatMap((res) => this.getData(res))).subscribe((res) => {
      // console.log(res);
      this._du.print(res, 'elContainer2');
    });

    //  Ex.3 switchMap
    source.pipe(switchMap((res) => this.getData(res))).subscribe((res) => {
      // console.log(res);
      this._du.print(res, 'elContainer3');
    });
  }

  getData(data) {
    return of(data + ' Video Uploaded').pipe(delay(1000));
  }
}
