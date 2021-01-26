import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  sourceKay: string;
  targetKay: string;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  sourceStete(kay: string): void{
    this.sourceKay = kay;
  
    }
  
    targetStete(kay: string): void{
    this.targetKay = kay;
    }
}
