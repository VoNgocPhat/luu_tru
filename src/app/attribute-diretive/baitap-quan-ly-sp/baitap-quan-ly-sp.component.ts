import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap-quan-ly-sp',
  templateUrl: './baitap-quan-ly-sp.component.html',
  styleUrls: ['./baitap-quan-ly-sp.component.scss']
})
export class BaitapQuanLySPComponent implements OnInit {

  DSSP:any = [];

  constructor() { }

  ngOnInit() {
  }

  btnThemSP(ma,ten,gia){
    const objSanPham = {
      maSP:ma,
      tenSP:ten,
      giaSP:gia
    };
    console.log(objSanPham);
    
    this.DSSP.push(objSanPham);
    
  }
  

}
