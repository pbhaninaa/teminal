import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualCardEntryComponent } from './manual-card-entry.component';

describe('ManualCardEntryComponent', () => {
  let component: ManualCardEntryComponent;
  let fixture: ComponentFixture<ManualCardEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManualCardEntryComponent]
    });
    fixture = TestBed.createComponent(ManualCardEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
