import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  username: string = 'Akshay';

  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit() {
  }

  onChange(uname) {
    console.log(uname.value);
    this._designUtility.userName.next(uname.value);
  }

}