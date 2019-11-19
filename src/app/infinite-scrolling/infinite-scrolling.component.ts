import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-infinite-scrolling',
  templateUrl: './infinite-scrolling.component.html',
  styleUrls: ['./infinite-scrolling.component.scss']
})

export class InfiniteScrollingComponent implements OnInit {
  array = [];
  sum = 10;
  active = true
  oldScrollTop = 0
  constructor() {
    this.addItems();
  }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true); 
  }

  ngOnDestroy() {
      window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (): void => {  
    if(this.active){
       setTimeout(()=>{
        this.callback()
       },1000)
    }
    this.active = false
  };
  callback(){
    if (document.documentElement.scrollTop > document.documentElement.scrollHeight-1000){
        this.sum += 1;
        this.addItems();
    } 
    if(this.oldScrollTop> document.documentElement.scrollTop){
        this.sum -= 1;
        this.addItems();
    }
    this.active =  true
    this.oldScrollTop = document.documentElement.scrollTop
  }
  addItems() {
    this.array = []
    for (let i = 0; i < this.sum; i++) {
      this.array.push({
        id: i,
        name: this.generateWord(5)
      });
    }
  }
  generateWord(l) {
    var text = "";
    var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < l; i++) {
      text += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }
    return text;
  }

}
