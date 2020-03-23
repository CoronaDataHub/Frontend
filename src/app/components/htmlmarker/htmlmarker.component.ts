import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-htmlmarker',
  templateUrl: './htmlmarker.component.html',
  styleUrls: ['./htmlmarker.component.sass']
})
export class HTMLMarkerComponent {
  @Input() data;

}
