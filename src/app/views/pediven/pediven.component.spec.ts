import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedivenComponent } from './pediven.component';

describe('PedivenComponent', () => {
  let component: PedivenComponent;
  let fixture: ComponentFixture<PedivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
