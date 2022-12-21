import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css'],
})
export class AsyncSubjectComponent implements OnInit {
  asyncVideoEmit;

  constructor(private _designUtility: DesignUtilityService) {}

  ngOnInit() {
    this._designUtility.asyncVideoEmit.subscribe((res) => {
      console.log(res);
      this.asyncVideoEmit = res;
    });
  }

  onVideoAdd(video) {
    console.log(video.value);
    this._designUtility.asyncVideoEmit.next(video.value);
  }

  onComplete() {
    this._designUtility.asyncVideoEmit.complete();
  }
}
