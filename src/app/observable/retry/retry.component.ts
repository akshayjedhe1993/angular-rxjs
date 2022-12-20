import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { retry, retryWhen, delay, scan } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css'],
})
export class RetryComponent implements OnInit {
  constructor(private http: HttpClient) {}
  data;
  fetching: boolean = false;
  status = 'No data';

  ngOnInit() {}

  fetchDetails() {
    this.fetching = true;
    this.status = 'Fetching Data';
    this.http
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .pipe(
        // retry(5)
        retryWhen((err) =>
          err.pipe(
            delay(3000),
            scan((retryCount) => {
              if (retryCount >= 5) {
                throw err;
              } else {
                retryCount += 1;
                console.log('retryCount', retryCount);
                this.status = 'Retrying attempts #' + retryCount;
                return retryCount;
              }
            }, 0)
          )
        )
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.data = res;
          this.status = 'Data fetched';
          this.fetching = false;
        },
        (error) => {
          console.log(error);
          this.status = 'Problem fetching data';
          this.fetching = false;
        }
      );
  }
}
