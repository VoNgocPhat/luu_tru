import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway-binding',
  templateUrl: './oneway-binding.component.html',
  styleUrls: ['./oneway-binding.component.scss']
})
export class OnewayBindingComponent implements OnInit {

  name:string = "CyberSoft";

  constructor() { }

  ngOnInit() {
  }

  eventBinding(thamso){
    console.log(thamso);
  }

}
