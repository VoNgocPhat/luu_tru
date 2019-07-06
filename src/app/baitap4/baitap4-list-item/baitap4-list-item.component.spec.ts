import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4ListItemComponent } from './baitap4-list-item.component';

describe('Baitap4ListItemComponent', () => {
  let component: Baitap4ListItemComponent;
  let fixture: ComponentFixture<Baitap4ListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4ListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4ListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
