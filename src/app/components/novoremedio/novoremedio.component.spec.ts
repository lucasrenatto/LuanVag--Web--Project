import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoremedioComponent } from './novoremedio.component';

describe('NovoremedioComponent', () => {
  let component: NovoremedioComponent;
  let fixture: ComponentFixture<NovoremedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoremedioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoremedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
