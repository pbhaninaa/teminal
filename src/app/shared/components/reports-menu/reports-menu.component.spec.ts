import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsMenuComponent } from './reports-menu.component';

describe('ReportsMenuComponent', () => {
  let component: ReportsMenuComponent;
  let fixture: ComponentFixture<ReportsMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportsMenuComponent]
    });
    fixture = TestBed.createComponent(ReportsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
