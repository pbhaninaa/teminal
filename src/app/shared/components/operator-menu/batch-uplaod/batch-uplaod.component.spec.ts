import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchUplaodComponent } from './batch-uplaod.component';

describe('BatchUplaodComponent', () => {
  let component: BatchUplaodComponent;
  let fixture: ComponentFixture<BatchUplaodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatchUplaodComponent]
    });
    fixture = TestBed.createComponent(BatchUplaodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
