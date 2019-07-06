import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4ContactUsComponent } from './baitap4-contact-us.component';

describe('Baitap4ContactUsComponent', () => {
  let component: Baitap4ContactUsComponent;
  let fixture: ComponentFixture<Baitap4ContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4ContactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4ContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
