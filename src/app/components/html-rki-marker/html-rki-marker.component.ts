import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-html-rki-marker',
  templateUrl: './html-rki-marker.component.html',
  styleUrls: ['./html-rki-marker.component.sass']
})
export class HtmlRkiMarkerComponent {

  @Input() data;

}
