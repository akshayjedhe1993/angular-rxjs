import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css'],
})
export class PromiseComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // this.myFunction().then((data) => console.log(data));
  }

  //  ......................................................................................................

  //  async keyword with function is always return promise

  // promise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('Data received.');
  //   }, 3000);
  // });

  // async myFunction() {
  //   let response = await this.promise;
  //   console.log(response);
  // }

  //  ........................................................................................................

  data1 = 'Data';
  data2 = 'Data';
  data3 = 'Data';

  dell = {
    brand: 'Dell',
    memory: '2TB',
  };

  buyLaptop = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.dell);
    }, 3000);
  });

  buyLaptop2 = fetch('https://jsonplaceholder.typicode.com/posts').then(
    (response) => response.json()
  );

  //  Ex 1: With Promise
  fetch1() {
    this.data1 = 'Fetching data...';
    this.buyLaptop.then((res) => {
      this.data1 = JSON.stringify(res);
    });
  }

  //  Ex 2: With Async / Await
  async fetch2() {
    this.data2 = 'Fetching data...';
    let res = await this.buyLaptop;
    this.data2 = JSON.stringify(res);
  }

  //  Ex 3: With Fetch API
  //  Promise
  fetch3() {
    this.data3 = 'Fetching data...';
    this.buyLaptop2.then((res) => {
      this.data3 = JSON.stringify(res);
    });
  }

  //  Async / Await
  // async fetch3() {
  //   this.data3 = 'Fetching data...';
  //   let res = await this.buyLaptop2;
  //   this.data3 = JSON.stringify(res);
  // }
}
