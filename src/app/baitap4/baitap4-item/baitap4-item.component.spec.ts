import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4ItemComponent } from './baitap4-item.component';

describe('Baitap4ItemComponent', () => {
  let component: Baitap4ItemComponent;
  let fixture: ComponentFixture<Baitap4ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4ItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
