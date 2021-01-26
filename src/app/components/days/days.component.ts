import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit {

  @Input() days: any;

  constructor() { }

  ngOnInit(): void {
  }

}
