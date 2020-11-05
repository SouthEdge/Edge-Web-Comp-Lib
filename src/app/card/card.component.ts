import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  value = '<edge-card firstname="Stencil" lastname="Js" avatar=""  description="Compiler Tool"></edge-card>';
  constructor() { }

  ngOnInit(): void {
  }
  dynamicText() {
    return this.value;
  }
}
