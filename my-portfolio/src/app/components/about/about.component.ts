import { Component, OnInit } from '@angular/core';
import {
  transition,
  trigger,
  style,
  animate} from '@angular/animations';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fade',[
      transition('void=>*',[
        style({opacity: 0}),
        animate(4000)
      ])
    ])]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
