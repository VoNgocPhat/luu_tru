import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent implements OnInit {

  DSNV:any = [
    {ten:'Nguyen',tuoi: 18},
    {ten:'Phat',tuoi: 19},
    {ten:'Quan',tuoi: 17},
    {ten:'Minh',tuoi: 20},
  ]

  constructor() { }

  ngOnInit() {
  }

}
