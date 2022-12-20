import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css'],
})
export class PluckComponent implements OnInit {
  constructor() {}

  data;
  data2;
  users = [
    {
      id: 1,
      name: 'Akshay',
      job: { title: 'Frontend Developer', EXP: '10 years' },
    },
    {
      id: 2,
      name: 'Gajanan',
      job: { title: 'Backend Developer', EXP: '9 years' },
    },
    {
      id: 3,
      name: 'Jedhe',
      job: { title: 'Designer', EXP: '11 years' },
    },
  ];

  ngOnInit() {
    //  Ex.1 By Property
    from(this.users)
      .pipe(
        // map((data) => data.name),
        pluck('name'),
        toArray()
      )
      .subscribe((res) => {
        this.data = res;
      });

    //  Ex.2
    from(this.users)
      .pipe(
        // map((data) => data.name),
        pluck('job', 'title'),
        toArray()
      )
      .subscribe((res) => {
        this.data2 = res;
      });
  }
}
