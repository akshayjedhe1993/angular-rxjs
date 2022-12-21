import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
})
export class Comp2Component implements OnInit {
  username: string = 'Akshay';

  constructor(private _designUtility: DesignUtilityService) {}

  ngOnInit() {}

  onChange(uname) {
    console.log(uname.value);
    this._designUtility.userName.next(uname.value);
  }
}