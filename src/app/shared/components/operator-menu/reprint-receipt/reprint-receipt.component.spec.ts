import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprintReceiptComponent } from './reprint-receipt.component';

describe('ReprintReceiptComponent', () => {
  let component: ReprintReceiptComponent;
  let fixture: ComponentFixture<ReprintReceiptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReprintReceiptComponent]
    });
    fixture = TestBed.createComponent(ReprintReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
