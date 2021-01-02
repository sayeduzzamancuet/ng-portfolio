import { Component, OnInit } from '@angular/core';
import {transition, trigger, style, animate} from '@angular/animations';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('fade',[
      transition('void=>*',[
        style({opacity: 0}),
        animate(2500)
      ])
    ])]
})
export class ContactComponent implements OnInit {
  contactForm=new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    message: new FormControl()
  });
  constructor(private _snackBar: MatSnackBar,public emailService:EmailService) { }
 
  ngOnInit(): void {
  }
  onSubmit(){
    this.emailService.sendMail();
    this._snackBar.open("Email has been sent", "Ok", {
      duration: 5000,
    });
    console.log(this.contactForm.value);
  }
}
