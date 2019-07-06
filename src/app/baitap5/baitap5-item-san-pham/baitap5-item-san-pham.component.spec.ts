import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap5ItemSanPhamComponent } from './baitap5-item-san-pham.component';

describe('Baitap5ItemSanPhamComponent', () => {
  let component: Baitap5ItemSanPhamComponent;
  let fixture: ComponentFixture<Baitap5ItemSanPhamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap5ItemSanPhamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap5ItemSanPhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
