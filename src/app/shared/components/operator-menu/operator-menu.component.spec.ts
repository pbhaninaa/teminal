import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorMenuComponent } from './operator-menu.component';

describe('OperatorMenuComponent', () => {
  let component: OperatorMenuComponent;
  let fixture: ComponentFixture<OperatorMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperatorMenuComponent]
    });
    fixture = TestBed.createComponent(OperatorMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
