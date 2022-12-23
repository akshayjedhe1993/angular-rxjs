import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  distinctUntilChanged,
  debounceTime,
  map,
  pluck,
  concatMap,
  switchMap,
} from 'rxjs/operators';
import { Search } from '../../appInterface/search';
import { SearchService } from '../../appServices/search.service';

@Component({
  selector: 'app-switch-map2',
  templateUrl: './switch-map2.component.html',
  styleUrls: ['./switch-map2.component.css'],
})
export class SwitchMap2Component implements AfterViewInit {
  @ViewChild('searchForm') searchForm: NgForm;
  searchResults: Search;
  constructor(private _searchService: SearchService) {}

  ngAfterViewInit() {
    const formValue = this.searchForm.valueChanges;

    formValue
      .pipe(
        // map(data => data['searchTerm'])
        pluck('searchTerm'),
        debounceTime(5000),
        distinctUntilChanged(),
        switchMap((data) => this._searchService.getSearches(data))
      )
      .subscribe((res) => {
        console.log(res);
        this.searchResults = res;
      });
  }
}
