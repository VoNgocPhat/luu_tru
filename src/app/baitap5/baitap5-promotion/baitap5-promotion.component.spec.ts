import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap5PromotionComponent } from './baitap5-promotion.component';

describe('Baitap5PromotionComponent', () => {
  let component: Baitap5PromotionComponent;
  let fixture: ComponentFixture<Baitap5PromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap5PromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap5PromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
