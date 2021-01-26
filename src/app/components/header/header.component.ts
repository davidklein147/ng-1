import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import {  } from 'events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
    this.stetesKays = Object.keys(this.STATES);
    this.stetesNames = Object.values(this.STATES);
    this.i = -1;
    this.j = -1;
    this.sourceKay = null;
    this.targetKay = null;

  }

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



  // stetesF():void{
  // this.stetes = for i = 0; i<this.stetesnames.
  // }

    STATES: any  = {
      AL: 'Alabama',
      AK: 'Alaska',
      AZ: 'Arizona',
      AR: 'Arkansas',
      CA: 'California',
      CO: 'Colorado',
      CT: 'Connecticut',
      DE: 'Delaware',
      FL: 'Florida',
      GA: 'Georgia',
      HI: 'Hawaii',
      ID: 'Idaho',
      IL: 'Illinois',
      IN: 'Indiana',
      IA: 'Iowa',
      KS: 'Kansas',
      KY: 'Kentucky',
      LA: 'Louisiana',
      ME: 'Maine',
      MD: 'Maryland',
      MA: 'Massachusetts',
      MI: 'Michigan',
      MN: 'Minnesota',
      MS: 'Mississippi',
      MO: 'Missouri',
      MT: 'Montana',
      NE: 'Nebraska',
      NV: 'Nevada',
      NH: 'New Hampshire',
      NJ: 'New Jersey',
      NM: 'New Mexico',
      NY: 'New York',
      NC: 'North Carolina',
      ND: 'North Dakota',
      OH: 'Ohio',
      OK: 'Oklahoma',
      OR: 'Oregon',
      PA: 'Pennsylvania',
      RI: 'Rhode Island',
      SC: 'South Carolina',
      SD: 'South Dakota',
      TN: 'Tennessee',
      TX: 'Texas',
      UT: 'Utah',
      VT: 'Vermont',
      VA: 'Virginia',
      WA: 'Washington',
      WV: 'West Virginia',
      WI: 'Wisconsin',
      WY: 'Wyoming'
  };

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
