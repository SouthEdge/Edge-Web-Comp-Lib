import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  value = '<edge-progress-bar value="0.3" label="30%" class="determinate-progress " ></edge-progress-bar>';
  constructor() { }

  ngOnInit(): void {
  }
  
  dynamicText() {
    return this.value;
  }

}
