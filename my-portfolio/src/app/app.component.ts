import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-portfolio';
  opened= true;
  toggleBtnText='Close'
  setToggleBtnText(text){
    this.toggleBtnText=text;
  }
}
