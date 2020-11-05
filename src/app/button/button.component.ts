import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  value = '<edge-button class="btn btn-default btn-wd" title="Default"></edge-button>';
  constructor() { }

  ngOnInit(): void {
    const elemen = document.querySelectorAll('edge-button');
      elemen.forEach(element => {
        element.addEventListener('name', data=>{
        alert(data);
      })
      });
  }
  dynamicText() {
    return this.value;
  }
}
