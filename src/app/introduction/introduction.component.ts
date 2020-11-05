import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
   val: any;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
     this.val = document.getElementById('content').innerText;
  }
  dynamicText() {
    return this.val;
  }

}
