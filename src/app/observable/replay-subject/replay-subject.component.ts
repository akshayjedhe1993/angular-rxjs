import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css'],
})
export class ReplaySubjectComponent implements OnInit {
  user1List = ['Angular 1', 'Angular 2'];
  user2List = [];
  user3List = [];

  subscribeMode2: boolean = false;
  subscribeMode3: boolean = false;

  subscription2: Subscription;
  subscription3: Subscription;

  methodInterval: boolean = false;
  intSubscription: Subscription;

  constructor(private _designUtility: DesignUtilityService) {}

  ngOnInit() {
    this._designUtility.videoEmit.subscribe((res) => {
      this.user1List.push(res);
    });
  }

  onVideoAdd(video) {
    this._designUtility.videoEmit.next(video.value);
  }

  user2Subscribe() {
    if (this.subscription2) {
      this.subscription2.unsubscribe();
    } else {
      this.subscription2 = this._designUtility.videoEmit.subscribe((res) => {
        this.user2List.push(res);
      });
    }
    this.subscribeMode2 = !this.subscribeMode2;
  }

  user3Subscribe() {
    if (this.subscription3) {
      this.subscription3.unsubscribe();
    } else {
      this.subscription3 = this._designUtility.videoEmit.subscribe((res) => {
        this.user3List.push(res);
      });
    }
    this.subscribeMode3 = !this.subscribeMode3;
  }

  toggleMethod() {
    const broadcastVideo = interval(1000);
    if (!this.methodInterval) {
      this.intSubscription = broadcastVideo.subscribe((res) => {
        this._designUtility.videoEmit.next('Video ' + res);
      });
    } else {
      this.intSubscription.unsubscribe();
    }
    this.methodInterval = !this.methodInterval;
  }
}
