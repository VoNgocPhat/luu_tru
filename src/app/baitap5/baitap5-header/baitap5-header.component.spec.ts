import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap5HeaderComponent } from './baitap5-header.component';

describe('Baitap5HeaderComponent', () => {
  let component: Baitap5HeaderComponent;
  let fixture: ComponentFixture<Baitap5HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap5HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap5HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
