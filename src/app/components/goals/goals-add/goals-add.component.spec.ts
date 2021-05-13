import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsAddComponent } from './goals-add.component';

describe('GoalsAddComponent', () => {
  let component: GoalsAddComponent;
  let fixture: ComponentFixture<GoalsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
