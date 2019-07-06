import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap5LaptopComponent } from './baitap5-laptop.component';

describe('Baitap5LaptopComponent', () => {
  let component: Baitap5LaptopComponent;
  let fixture: ComponentFixture<Baitap5LaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap5LaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap5LaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
