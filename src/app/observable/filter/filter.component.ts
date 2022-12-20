import { Component, OnInit } from '@angular/core';
import { from, toArray } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  data;
  data2;
  data3;
  dataArr = [
    { id: 1, name: 'Akshay', gender: 'Male' },
    { id: 2, name: 'Gajanan', gender: 'Male' },
    { id: 3, name: 'Jedhe', gender: 'Female' },
    { id: 4, name: 'Akshay11', gender: 'Male' },
    { id: 5, name: 'Gajanan11', gender: 'Male' },
    { id: 6, name: 'Jedhe11', gender: 'Female' },
    { id: 7, name: 'Akshay1', gender: 'Male' },
    { id: 8, name: 'Gajanan1', gender: 'Male' },
    { id: 9, name: 'Jedhe1', gender: 'Female' },
  ];
  constructor() {}

  ngOnInit() {
    const source = from(this.dataArr);

    //  Ex.1 Filter by Length
    source
      .pipe(
        filter((data) => data.name.length > 6),
        toArray()
      )
      .subscribe((res) => {
        this.data = res;
      });

    //  Ex.2 Filter by Gender
    source
      .pipe(
        filter((data) => data.gender == 'Female'),
        toArray()
      )
      .subscribe((res) => {
        this.data2 = res;
      });

    //  Ex.3 Filter by nth Item
    source
      .pipe(
        filter((data) => data.id <= 6),
        toArray()
      )
      .subscribe((res) => {
        this.data3 = res;
      });
  }
}
