import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap5SmartPhoneComponent } from './baitap5-smart-phone.component';

describe('Baitap5SmartPhoneComponent', () => {
  let component: Baitap5SmartPhoneComponent;
  let fixture: ComponentFixture<Baitap5SmartPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap5SmartPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap5SmartPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
