import { Component, Input, OnInit } from '@angular/core';
import { BussTataService } from 'src/app/services/buss-tata.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {


  @Input() busId: string[];
  dataOfBasket: any[];

  constructor(private bussTataService: BussTataService) {
    this.dataOfBasket = this.bussTataService.busData;
  }

  ngOnInit(): void {

  }



}
