import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4WhatWeDoComponent } from './baitap4-what-we-do.component';

describe('Baitap4WhatWeDoComponent', () => {
  let component: Baitap4WhatWeDoComponent;
  let fixture: ComponentFixture<Baitap4WhatWeDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4WhatWeDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4WhatWeDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
