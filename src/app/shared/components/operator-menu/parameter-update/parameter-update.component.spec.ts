import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterUpdateComponent } from './parameter-update.component';

describe('ParameterUpdateComponent', () => {
  let component: ParameterUpdateComponent;
  let fixture: ComponentFixture<ParameterUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParameterUpdateComponent]
    });
    fixture = TestBed.createComponent(ParameterUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
