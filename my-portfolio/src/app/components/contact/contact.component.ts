import { Component, OnInit } from '@angular/core';
import {
  transition,
  trigger,
  style,
  animate} from '@angular/animations';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('fade',[
      transition('void=>*',[
        style({opacity: 0}),
        animate(4000)
      ])
    ])]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
