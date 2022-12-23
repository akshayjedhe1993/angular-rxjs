import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css'],
})
export class MergeMapComponent implements OnInit {
  constructor(private _du: DesignUtilityService) {}

  ngOnInit() {
    //  map + mergeAll = mergeMap

    const source = from(['Tech', 'Comedy', 'News']);

    //  Ex.1 Map
    source.pipe(map((res) => this.getData(res))).subscribe((res) => {
      // res.subscribe(res2 => {
      //   console.log(res2);
      this._du.print(res, 'elContainer1');
      // })
    });

    //  Ex.2 Map + mergeAll
    source
      .pipe(
        map((res) => this.getData(res)),
        mergeAll()
      )
      .subscribe((res) => {
        // console.log(res);
        this._du.print(res, 'elContainer2');
      });

    //  Ex.3 mergeMap
    source.pipe(mergeMap((res) => this.getData(res))).subscribe((res) => {
      // console.log(res);
      this._du.print(res, 'elContainer3');
    });
  }

  getData(data) {
    return of(data + ' Video Uploaded');
  }
}
