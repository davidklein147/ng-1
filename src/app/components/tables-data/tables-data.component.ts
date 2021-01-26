import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {  } from 'events';
import { BussTataService } from 'src/app/services/buss-tata.service';

@Component({
  selector: 'app-tables-data',
  templateUrl: './tables-data.component.html',
  styleUrls: ['./tables-data.component.css']
})
export class TablesDataComponent implements OnInit {

  @Input() dataOfTable: any;
  // @Input() busId: number;
  i: number;

  // @Output() sumTickets: number;
  @Output() sumTickets: EventEmitter<number> = new EventEmitter<number>();
  @Output() sumPrice: EventEmitter<number> = new EventEmitter<number>();
  @Output() busIdAdd: EventEmitter<number> = new EventEmitter<number>();
  @Output() busIdLess: EventEmitter<number> = new EventEmitter<number>();


  _dataOfTable: number;
  // _sumPrice:number;zzz

  constructor(private bussTataServiceb:BussTataService) {
    this._dataOfTable = 0;

   }

  ngOnInit(): void {

  }

  add(): void{
   this._dataOfTable++;
   this.sumTickets.emit(+1);
   this.sumPrice.emit(this.dataOfTable.price);
   this.busIdAdd.emit(this.dataOfTable.busId);
  }

  less(): void{
    if (this._dataOfTable > 0) {
      this._dataOfTable--;
      this.sumTickets.emit(-1);
      this.sumPrice.emit(-this.dataOfTable.price);
      this.busIdLess.emit(this.dataOfTable.busId);
    }
  }

  getArrival():number{
    var i = new Date(this.dataOfTable.date); 
    var a = this.dataOfTable.due.replace(/\D/g," ");
    var b = a.split(" ");
    var c = 60* +b[0]+ +b[1];
    var j = i.setMinutes(i.getMinutes() + c );
    return j;
  }

  getStete(kay: string):any{
    var i = this.bussTataServiceb.STATES_LETTERS.indexOf(kay);
    return this.bussTataServiceb.STATES_NAMES[i];
  }

  // sumOfTickrts(): void{

  //   this.sumTickets.emit(this._dataOfTable)
  // }

}
