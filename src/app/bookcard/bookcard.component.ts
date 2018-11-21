import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bookcard',
  templateUrl: './bookcard.component.html',
  styleUrls: ['./bookcard.component.scss']
})
export class BookcardComponent implements OnInit {

  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
