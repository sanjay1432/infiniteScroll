import { Component } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser'
import {Observable, BehaviorSubject} from 'rxjs';
import { fromEvent } from 'rxjs';
import { merge } from 'rxjs';
import {distinct, filter, map, debounceTime, tap, flatMap} from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private cache = []; 
  private pageByManual$ = new BehaviorSubject(1);
  private itemHeight = 400;
  private numberOfItems = 5; 
  private pageByScroll$ = fromEvent(window, "scroll")
    .pipe(
        map(() => window.scrollY),
        filter(current => current >=  document.body.clientHeight - window.innerHeight),
        debounceTime(200),
        distinct(),
        map(y => Math.ceil((y + window.innerHeight)/ (this.itemHeight * this.numberOfItems)))
    );
       
  private pageByResize$ = fromEvent(window, "resize")
    .pipe(
      debounceTime(200),
	    map(_ => Math.ceil(
        (window.innerHeight + document.body.scrollTop) / 
        (this.itemHeight * this.numberOfItems)
      ))
    )
    
  private pageToLoad$ = merge(this.pageByManual$, this.pageByScroll$, this.pageByResize$)
    .pipe(
      tap(page => console.log(page)),
      distinct(),
      filter(page => this.cache[page-1] === undefined)
    );

  loading = false;
    
  itemResults$ = this.pageToLoad$
    .pipe(
      flatMap((page: number) => {
        return this.getYotubeData(page)
          .pipe(
            tap(resp => {
              this.cache[page -1] = resp;
              if((this.itemHeight * this.numberOfItems * page) < window.innerHeight){
                this.pageByManual$.next(page + 1);
              }
            })
          )
      }),
      map(() => _.flatMap(this.cache))
    ); 
  
  constructor(private sanitizer: DomSanitizer){} 

  getYotubeData(page){
      return new Observable((observer) => {
        observer.next([... this._ytData.slice(5*(page-1),(this.numberOfItems*(page-1))+this.numberOfItems)])
        observer.complete()
      }) 
  }

  _ytData = [{
    "name": 1,
    "iframe": "https://www.youtube.com/embed/UpQbySufiak"
  }, {
    "name": 2,
    "iframe": "https://www.youtube.com/embed/MrMZzI7TOUk"
  }, {
    "name": 3,
    "iframe": "https://www.youtube.com/embed/mV1zX2O91hk"
  }, {
    "name": 4,
    "iframe": "https://www.youtube.com/embed/e24qXJvGK2I"
  }, {
    "name": 5,
    "iframe": "https://www.youtube.com/embed/zhllkjYYUVE"
  }, {
    "name": 6,
    "iframe": "https://www.youtube.com/embed/e24qXJvGK2I"    
  }, {
    "name": 7,
    "iframe": "https://www.youtube.com/embed/zhllkjYYUVE"
  }, {
    "name": 8,
    "iframe": "https://www.youtube.com/embed/mV1zX2O91hk"
  }, {
    "name": 9,
    "iframe": "https://www.youtube.com/embed/zhllkjYYUVE"

  }, {
    "name": 10,
    "iframe": "https://www.youtube.com/embed/UpQbySufiak"

  }, {
    "name": 11,
    "iframe": "https://www.youtube.com/embed/UpQbySufiak"

  }, {
    "name": 12,
    "iframe": "https://www.youtube.com/embed/e24qXJvGK2I"

  }, {
    "name": 13,
    "iframe": "https://www.youtube.com/embed/mV1zX2O91hk"

  }, {
    "name": 14,
    "iframe": "https://www.youtube.com/embed/MrMZzI7TOUk"

  }, {
    "name": 15,
    "iframe": "https://www.youtube.com/embed/mV1zX2O91hk"

  }, {
    "name": 16,
    "iframe": "https://www.youtube.com/embed/MrMZzI7TOUk"

  }, {
    "name": 17,
    "iframe": "https://www.youtube.com/embed/mV1zX2O91hk"

  }, {
    "name": 18,
    "iframe": "https://www.youtube.com/embed/UpQbySufiak"

  }, {
    "name": 19,
    "iframe": "https://www.youtube.com/embed/MrMZzI7TOUk"

  }, {
    "name": 20,
    "iframe": "https://www.youtube.com/embed/MrMZzI7TOUk"

  }, {
    "name": 21,
    "iframe": "https://www.youtube.com/embed/e24qXJvGK2I"

  }, {
    "name": 22,
    "iframe": "https://www.youtube.com/embed/MrMZzI7TOUk"

  }, {
    "name": 23,
    "iframe": "https://www.youtube.com/embed/mV1zX2O91hk"

  }, {
    "name": 24,
    "iframe": "https://www.youtube.com/embed/UpQbySufiak"

  }, {
    "name": 25,
    "iframe": "https://www.youtube.com/embed/MrMZzI7TOUk"

  }, {
    "name": 26,
    "iframe": "https://www.youtube.com/embed/mV1zX2O91hk"

  }, {
    "name": 27,
    "iframe": "https://www.youtube.com/embed/MrMZzI7TOUk"

  }, {
    "name": 28,
    "iframe": "https://www.youtube.com/embed/mV1zX2O91hk"

  }, {
    "name": 29,
    "iframe": "https://www.youtube.com/embed/zhllkjYYUVE"

  }, {
    "name": 30,
    "iframe": "https://www.youtube.com/embed/MrMZzI7TOUk"

  }, {
    "name": 31,
    "iframe": "https://www.youtube.com/embed/MrMZzI7TOUk"

  }, {
    "name": 32,
    "iframe": "https://www.youtube.com/embed/mV1zX2O91hk"

  }, {
    "name": 33,
    "iframe": "https://www.youtube.com/embed/MrMZzI7TOUk"

  }, {
    "name": 34,
    "iframe": "https://www.youtube.com/embed/zhllkjYYUVE"

  }, {
    "name": 35,
    "iframe": "https://www.youtube.com/embed/UpQbySufiak"

  }, {
    "name": 36,
    "iframe": "https://www.youtube.com/embed/MrMZzI7TOUk"

  }, {
    "name": 37,
    "iframe": "https://www.youtube.com/embed/zhllkjYYUVE"

  }, {
    "name": 38,
    "iframe": "https://www.youtube.com/embed/MrMZzI7TOUk"

  }, {
    "name": 39,
    "iframe": "https://www.youtube.com/embed/mV1zX2O91hk"

  }, {
    "name": 40,
    "iframe": "https://www.youtube.com/embed/zhllkjYYUVE"

  }, {
    "name": 41,
    "iframe": "https://www.youtube.com/embed/e24qXJvGK2I"

  }, {
    "name": 42,
    "iframe": "https://www.youtube.com/embed/mV1zX2O91hk"

  }, {
    "name": 43,
    "iframe": "https://www.youtube.com/embed/mV1zX2O91hk"

  }, {
    "name": 44,
    "iframe": "https://www.youtube.com/embed/e24qXJvGK2I"

  }, {
    "name": 45,
    "iframe": "https://www.youtube.com/embed/MrMZzI7TOUk"

  }, {
    "name": 46,
    "iframe": "https://www.youtube.com/embed/UpQbySufiak"

  }, {
    "name": 47,
    "iframe": "https://www.youtube.com/embed/zhllkjYYUVE"

  }, {
    "name": 48,
    "iframe": "https://www.youtube.com/embed/e24qXJvGK2I"

  }, {
    "name": 49,
    "iframe": "https://www.youtube.com/embed/UpQbySufiak"

  }, {
    "name": 50,
    "iframe": "https://www.youtube.com/embed/e24qXJvGK2I"

  }]

  
	
}
