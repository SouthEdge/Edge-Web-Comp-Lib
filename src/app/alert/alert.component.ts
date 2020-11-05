import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  value = '<edge-alert headertitle="Info Notification Alert.." class="primary"></edge-alert>';
  constructor() { }

  ngOnInit(): void {
  }
  dynamicText() {
    return this.value;
  }
}
