import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DesignUtilityService {
  // In BehaviorSubject we can set initial value of it but
  // in Subject we can not set initial value
  exclusive = new Subject<boolean>();
  userName = new BehaviorSubject<string>('Akshay');

  constructor() {}

  print(val, containerId) {
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId).appendChild(el);
  }
}
