import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import {  } from 'events';
import { BussTataService } from 'src/app/services/buss-tata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() sourceStete: EventEmitter<string> = new EventEmitter<string>();
  @Output() targetStete: EventEmitter<string> = new EventEmitter<string>();
  stetesKays: string[];
  stetesNames: string[];
  i: number;
  j: number;
  source: string;
  target: string;
  sourceKay: string;
  targetKay: string;

  constructor(private bussData: BussTataService) {
    this.stetesKays = bussData.STATES_LETTERS;
    this.stetesNames =  bussData.STATES_NAMES;
    this.i = -1;
    this.j = -1;
    this.sourceKay = null;
    this.targetKay = null;

  }

  ngOnInit(): void {

  }

  search(): void{
    this.i = this.stetesNames.indexOf(this.source);
    this.sourceKay = this.stetesKays[this.i];
    this.sourceStete.emit(this.sourceKay);
    this.j = this.stetesNames.indexOf(this.target);
    this.targetKay = this.stetesKays[this.j];
    this.targetStete.emit(this.targetKay);
    console.log(this.sourceKay + ' ' + this.targetKay);
  }





}
