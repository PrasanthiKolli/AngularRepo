import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonLIst:SalesPerson[]=[
    new SalesPerson("nirvan","madapala","nirvan.madapala@gmail.com",500000),
    new SalesPerson("giribabu","madapala","giri.madapala@gmail.com",400000),
    new SalesPerson("prasanthi","kolli","prasanthi.kolli@gmail.com",200000)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
