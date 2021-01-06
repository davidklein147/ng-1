import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grit',
  templateUrl: './grit.component.html',
  styleUrls: ['./grit.component.css']
})
export class GritComponent implements OnInit {

  daySell:any = [{
    day: 'sunday',
    price: '10.00',
    currency: '#0036'
  }, {
    day: 'monday',
    price:'12.00',
    currency:'#0036'
  }, {
    day: 'tuseday',
    price:'14.00',
    currency:'#0036'
  }, {
    day: 'wedneday',
    price: '16.00',
    currency:'#0036'
  }, {
    day: 'thursday',
    price: '18.00',
    currency:'#0036'
  },{
    day: 'frisay',
    price:'20.00',
    currency:'#0036'
  }, {
    day: 'saturday',
    price: '22.00',
    currency:'#0036'
  }]
  
  constructor() { }

  ngOnInit(): void {
  }

}
