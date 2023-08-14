import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundConfigComponent } from './sound-config.component';

describe('SoundConfigComponent', () => {
  let component: SoundConfigComponent;
  let fixture: ComponentFixture<SoundConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
