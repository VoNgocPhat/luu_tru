import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap5CarouselComponent } from './baitap5-carousel.component';

describe('Baitap5CarouselComponent', () => {
  let component: Baitap5CarouselComponent;
  let fixture: ComponentFixture<Baitap5CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap5CarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap5CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
