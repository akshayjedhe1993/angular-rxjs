import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.css'],
})
export class ExhaustMapComponent implements OnInit, AfterViewInit {
  url = 'https://rxjs-55c71-default-rtdb.firebaseio.com/exhaustMap.json';
  num = 0;
  saveRequest;
  fetching = false;

  @ViewChild('btn') btn: ElementRef;

  constructor(private _http: HttpClient, private _du: DesignUtilityService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    fromEvent(this.btn.nativeElement, 'click')
      .pipe(
        tap(() => (this.fetching = true)),
        concatMap(() => this.onSave(this.onSave(this.num++)))
      )
      .subscribe((res) => {
        this.onFetch();
        this.fetching = false;
      });
  }

  onFetch() {
    this._http.get<any>(this.url).subscribe((res) => {
      this.saveRequest = res.data;
    });
  }

  onSave(changes) {
    return this._http.put(this.url, { data: changes });
  }
}
