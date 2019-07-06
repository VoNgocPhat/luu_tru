import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapQuanLySPComponent } from './baitap-quan-ly-sp.component';

describe('BaitapQuanLySPComponent', () => {
  let component: BaitapQuanLySPComponent;
  let fixture: ComponentFixture<BaitapQuanLySPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapQuanLySPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapQuanLySPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
