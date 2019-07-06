import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDiretiveComponent } from './attribute-diretive.component';

describe('AttributeDiretiveComponent', () => {
  let component: AttributeDiretiveComponent;
  let fixture: ComponentFixture<AttributeDiretiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeDiretiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeDiretiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
