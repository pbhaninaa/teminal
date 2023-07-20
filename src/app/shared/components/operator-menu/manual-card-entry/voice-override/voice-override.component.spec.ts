import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceOverrideComponent } from './voice-override.component';

describe('VoiceOverrideComponent', () => {
  let component: VoiceOverrideComponent;
  let fixture: ComponentFixture<VoiceOverrideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoiceOverrideComponent]
    });
    fixture = TestBed.createComponent(VoiceOverrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
