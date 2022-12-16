import { Component, VERSION } from '@angular/core';
import { from, of } from 'rxjs';
import { filter, first, map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor() {
    // ### CREATIONAL OPERATORS ###
    const STRING_ARRAY = [
      'Hello World!',
      'This is',
      'an example',
      "of 'from' operator",
    ];
    console.log(':::from:::');
    const obs1$ = from(STRING_ARRAY);
    obs1$.subscribe(console.log);

    console.log(':::::::::::::::::::::::::::::::::::::::::::');

    console.log(':::of:::');
    const obsArray$ = of(STRING_ARRAY);
    console.log('\nIn case of iterative data source');
    obsArray$.subscribe(console.log);
    const obsSequence$ = of(
      'Hello World!',
      'This is',
      'an example',
      "of 'from' operator"
    );
    console.log('\nIn case of sequential data source');
    obsSequence$.subscribe(console.log);
    console.log(':::::::::::::::::::::::::::::::::::::::::::');

    // ### PIPE FUNCTION AND PIPEABLE OPERATORS ###
    console.log(':::MAP:::');
    const obs$ = from([1, 5, 10, 15, 20, 25]);

    obs$.pipe(map((value) => value * 10)).subscribe(console.log);

    console.log(':::::::::::::::::::::::::::::::::::::::::::');

    console.log(':::FILTER:::');
    obs$.pipe(filter((value) => value > 10)).subscribe(console.log);

    console.log(':::::::::::::::::::::::::::::::::::::::::::');

    console.log(':::FIRST:::');
    obs$.pipe(first()).subscribe(console.log);
    // Take predicate otherwise default
    console.log('Returns first number which makes predicate true');
    obs$.pipe(first((value) => value > 10, -50)).subscribe(console.log);

    console.log('Returns default as all numbers present are positive');
    obs$.pipe(first((value) => value < 0, -50)).subscribe(console.log);

    console.log(':::::::::::::::::::::::::::::::::::::::::::');

    console.log(':::combineLatest:::');
    // combineLatest([
    //   this.producutSevice.getProducts(),
    //   this.categoryFilterChangedSubject$,
    //   this.countryFilterChangedSubject$
    // ]).subscribe(([products, selectedCategory, selectedCountry]) => {
    //   products.filter(product =>
    //     product.category === selectedCategory && product.country === selectedCountry);
    // });

    console.log(':::::::::::::::::::::::::::::::::::::::::::');

    console.log(':::switchMap:::');
    // this.route.paramMap
    //   .pipe(
    //     switchMap((paramMap: ParamMap)
    //       => this.productService.getProduct(+paramMap.get('id')))
    //   ).subscribe(...);

    console.log(':::::::::::::::::::::::::::::::::::::::::::');
  }
}
