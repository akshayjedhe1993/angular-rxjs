import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DesignUtilityService {
  // In BehaviorSubject we can set initial value of it but
  // in Subject we can not set initial value
  exclusive = new Subject<boolean>();
  userName = new BehaviorSubject<string>('Akshay');

  videoEmit = new ReplaySubject<string>(3, 5000);
  asyncVideoEmit = new AsyncSubject<string>();

  constructor() {}

  print(val, containerId) {
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId).appendChild(el);
  }

  print2(val, containerId) {
    let el = document.createElement('div');
    el.setAttribute('class', 'item');
    el.innerHTML = val;
    document.getElementById(containerId).prepend(el);
  }
}
