import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { mergeMap, delay, concatMap } from 'rxjs/operators';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-concat-map2',
  templateUrl: './concat-map2.component.html',
  styleUrls: ['./concat-map2.component.css'],
})
export class ConcatMap2Component implements OnInit {
  constructor(private _du: DesignUtilityService) {}

  notifyData = [
    {
      name: 'Facebook',
      icon: 'https://cdn-icons-png.flaticon.com/512/124/124010.png',
      time: '4 sec ago',
      img: 'https://placeimg.com/50/50/tech/4',
      strong: 'Akshay',
      p: 'Commented on your post: Awesome...',
    },
    {
      name: 'Twitter',
      icon: 'https://cdn-icons-png.flaticon.com/512/145/145812.png',
      time: '3 sec ago',
      img: 'https://placeimg.com/50/50/tech/3',
      strong: 'Pooja',
      p: 'Commented on your post: Awesome...',
    },
    {
      name: 'Facebook',
      icon: 'https://cdn-icons-png.flaticon.com/512/124/124010.png',
      time: '2 sec ago',
      img: 'https://placeimg.com/50/50/tech/2',
      strong: 'Akshay',
      p: 'Commented on your post: Awesome...',
    },
    {
      name: 'Twitter',
      icon: 'https://cdn-icons-png.flaticon.com/512/145/145812.png',
      time: '1 sec ago',
      img: 'https://placeimg.com/50/50/tech/1',
      strong: 'Pooja',
      p: 'Commented on your post: Awesome...',
    },
  ];

  ngOnInit() {
    from(this.notifyData)
      .pipe(
        // mergeMap((res) => this.getHtml(res)),
        concatMap((res) => this.getHtml(res))
      )
      .subscribe((res) => {
        console.log(res);
        this._du.print2(res, 'elContainer');
      });
  }

  getHtml(data) {
    return of(`<div class="header">
      <div class="app">
        <img
          src="${data.icon}"
          alt="fb"
          width="20"
        />
        ${data.name}
      </div>
      <div class="time">${data.time}</div>
    </div>
    <div class="body">
      <img
        src="${data.img}"
        class="item-img"
      />
      <strong>${data.strong}</strong>
      <p>${data.p}</p>
    </div>`).pipe(delay(3000));
  }
}
