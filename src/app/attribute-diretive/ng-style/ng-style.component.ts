import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.scss']
})
export class NgStyleComponent implements OnInit {

  bg:string = 'green';
  name:string = 'Nguyen';

  constructor() { }

  ngOnInit() {
  }

}
