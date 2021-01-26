import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-herders-data',
  templateUrl: './herders-data.component.html',
  styleUrls: ['./herders-data.component.css']
})
export class HerdersDataComponent implements OnInit {
  @Input() stetes: string;

  constructor() { }

  ngOnInit(): void {
  }

}
