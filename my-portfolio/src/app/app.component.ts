import { Component } from '@angular/core';
import {
  transition,
  trigger,
  style,
  animate} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fade',[
      transition('void=>*',[
        style({opacity: 0}),
        animate(2000)
      ])
    ])
  ]
})
export class AppComponent {
  title = 'my-portfolio';
  opened= true;
  toggleBtnText='Close'
  setToggleBtnText(text){
    this.toggleBtnText=text;
  }
}
