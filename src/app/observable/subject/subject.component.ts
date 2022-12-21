import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit, OnDestroy {
  username: string;

  constructor(private _designUtility: DesignUtilityService) {
    this._designUtility.userName.subscribe((res) => {
      this.username = res;
    });
  }

  ngOnInit() {
    this._designUtility.exclusive.next(true);
  }

  ngOnDestroy() {
    this._designUtility.exclusive.next(false);
  }
}
