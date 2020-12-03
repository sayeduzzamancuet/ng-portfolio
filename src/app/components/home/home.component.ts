import { Component, OnInit } from '@angular/core';
import {
  transition,
  trigger,
  style,
  animate} from '@angular/animations';
import { Usermessage } from 'src/app/classes/usermessage';

export interface PeriodicElement {
  name: string;
  institute: string;
  year: number;
  score: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'BSc', institute: 'CUET', year: 2018, score: '2.8'},
  { name: 'HSC', institute: 'Govt. Ananda mohon college, Mymensingh', year: 2012, score: '5'},
  { name: 'SSC', institute: 'KB Highschool, Mymensingh', year: 2012, score: '5'}
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fade',[
      transition('void=>*',[
        style({opacity: 0}),
        animate(2500)
      ])
    ])]
})

export class HomeComponent implements OnInit {
 
  displayedColumns: string[] = ['name', 'institute', 'year','score'];
  dataSource = ELEMENT_DATA;
  constructor() { 
  }

  ngOnInit(): void {
    
  }
  
}
