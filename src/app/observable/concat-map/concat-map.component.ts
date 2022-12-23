import { Component, OnInit } from '@angular/core';
import { from, of, delay } from 'rxjs';
import { concatAll, concatMap, map, mergeMap } from 'rxjs/operators';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css'],
})
export class ConcatMapComponent implements OnInit {
  constructor(private _du: DesignUtilityService) {}

  ngOnInit() {
    //  map + concatAll = concatMap

    const source = from(['Tech', 'Comedy', 'News']);

    //  Ex.1 Map
    source.pipe(map((res) => this.getData(res))).subscribe((res) => {
      // res.subscribe((res2) => {
      //   console.log(res2);
      this._du.print(res, 'elContainer1');
      // });
    });

    //  Ex.2 mergeMap
    source.pipe(mergeMap((res) => this.getData(res))).subscribe((res) => {
      // console.log(res);
      this._du.print(res, 'elContainer2');
    });

    //  Ex.3 concatMap
    source.pipe(concatMap((res) => this.getData(res))).subscribe((res) => {
      // console.log(res);
      this._du.print(res, 'elContainer3');
    });
  }

  getData(data) {
    return of(data + ' Video Uploaded').pipe(delay(2000));
  }
}
