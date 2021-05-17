import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsProgressComponent } from './charts-progress.component';

describe('ChartsProgressComponent', () => {
  let component: ChartsProgressComponent;
  let fixture: ComponentFixture<ChartsProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
