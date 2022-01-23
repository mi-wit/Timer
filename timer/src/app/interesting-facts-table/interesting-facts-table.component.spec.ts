import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestingFactsTableComponent } from './interesting-facts-table.component';

describe('InterestingFactsTableComponent', () => {
  let component: InterestingFactsTableComponent;
  let fixture: ComponentFixture<InterestingFactsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestingFactsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestingFactsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
