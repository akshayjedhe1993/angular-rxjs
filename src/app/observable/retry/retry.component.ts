import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css'],
})
export class RetryComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchDetails();
  }

  fetchDetails() {
    this.http
      .get('https://global-1bb0f.firebaseio.com/user.json')
      .subscribe((res) => {
        console.log(res);
      });
  }
}
