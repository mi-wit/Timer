import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeEndDialogComponent } from './time-end-dialog.component';

describe('TimeEndDialogComponent', () => {
  let component: TimeEndDialogComponent;
  let fixture: ComponentFixture<TimeEndDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeEndDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeEndDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
