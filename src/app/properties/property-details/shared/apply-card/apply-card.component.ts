import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-apply-card',
  templateUrl: './apply-card.component.html',
  styleUrls: ['./apply-card.component.scss']
})
export class ApplyCardComponent implements OnInit {

  @Input() type: string;
  @Input() url: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
