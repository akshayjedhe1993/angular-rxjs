import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Search } from '../../appInterface/search';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.css'],
})
export class ShareReplayComponent implements OnInit {
  url = 'https://jsonplaceholder.typicode.com/photos';
  allData: Observable<any>;
  album1: Observable<any>;
  album2: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.allData = this.http.get<Search[]>(this.url).pipe(
      map((data) =>
        data.filter((data2) => data2.albumId == 1 || data2.albumId == 2)
      ),
      shareReplay()
    );

    this.album1 = this.allData.pipe(
      map((data) => data.filter((data2) => data2.albumId == 1))
    );

    this.album2 = this.allData.pipe(
      map((data) => data.filter((data2) => data2.albumId == 2))
    );
  }
}
