import { Component, OnInit } from '@angular/core';
import { concat, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css'],
})
export class ConcatComponent implements OnInit {
  constructor(private _du: DesignUtilityService) {}

  ngOnInit() {
    const sourceTech = interval(1000).pipe(
      map((v) => 'Tech Video #' + (v + 1)),
      take(5)
    );
    const sourceComedy = interval(1000).pipe(
      map((v) => 'Comedy Video #' + (v + 1)),
      take(3)
    );
    const sourceNews = interval(1000).pipe(
      map((v) => 'News Video #' + (v + 1)),
      take(4)
    );

    const finalObs = concat(sourceTech, sourceComedy, sourceNews);
    finalObs.subscribe((res) => {
      console.log(res);
      this._du.print(res, 'elContainer');
    });
  }
}
