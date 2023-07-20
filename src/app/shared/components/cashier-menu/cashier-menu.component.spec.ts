import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierMenuComponent } from './cashier-menu.component';

describe('CashierMenuComponent', () => {
  let component: CashierMenuComponent;
  let fixture: ComponentFixture<CashierMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashierMenuComponent]
    });
    fixture = TestBed.createComponent(CashierMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
