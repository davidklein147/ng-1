import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BussTataService } from 'src/app/services/buss-tata.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit , OnChanges{
  @Input()sourceKay: string;
  @Input()targetKay: string;
  sumTicket: number;
  sumPrice: number;
  busId: string[];
  busData: any[];

  constructor(private bussTataService: BussTataService) {
    this.sumTicket = 0;
    this.sumPrice = 0;
    this.busId = [];
    this.busData = bussTataService.busData;


  }

  ngOnInit(): void {
    // this.busData = this.setBusData(this.sourceKay, this.targetKay);

  }

  ngOnChanges(){
    this.setBusData();
  }

  sumAllTicket(i: number): void{
    this.sumTicket += i;
  }

  sumAllPrice(p: number): void{
    this.sumPrice += p;
  }

  allBusId(id: string): void{
    this.busId.push(id);
  }

  lessBusId(id: string){
    const i = this.busId.indexOf(id);
    this.busId.splice(i, 1);
  }
  setBusData(): void{
    if (this.sourceKay && this.targetKay){
   this.busData = this.bussTataService.busData.filter(
      b => b.source === this.sourceKay && b.dest === this.targetKay );
   console.log(this.busData);
   console.log(this.sourceKay + ' ' + this.targetKay);
   }
  }


}
