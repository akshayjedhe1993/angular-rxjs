import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.css'],
})
export class ExhaustMapComponent implements OnInit {
  fetching = false;
  num = 0;
  url = 'https://global-1bb0f.firebaseio.com/exhaustMap.json';
  constructor(private _http: HttpClient, private _du: DesignUtilityService) {}

  ngOnInit() {}

  onSave(changes) {
    return this._http.put(this.url, {data: changes})
  }

  btnClick() {
    this.onSave(this.num++).subscribe(res => {
      console.log(res);
    })
  }
}
