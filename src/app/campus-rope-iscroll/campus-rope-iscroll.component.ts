import { Component, OnInit } from '@angular/core';
const nisPackage = require('../../../package.json');
@Component({
  selector: 'app-campus-rope-iscroll',
  templateUrl: './campus-rope-iscroll.component.html',
  styleUrls: ['./campus-rope-iscroll.component.scss']
})
export class CampusRopeIScrollComponent implements OnInit {
  array = [];
  sum = 10;
  scrollDistance = 1;
  scrollUpDistance = 2;
  throttle = 2;
  nisVersion = nisPackage.dependencies['ngx-infinite-scroll'];
  constructor() {
    this.addItems();
  }

  ngOnInit() {}
  addItems() {
    this.array = []
    for (let i = 0; i < this.sum; i++) {
      this.array.push({
        id: i,
        name: this.generateWord(5)
      });
    }
  }

  onScrollDown() {
    this.sum += 1;
    this.addItems();
  }

  onUp() {
    this.sum -= 1;
    this.addItems();
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
