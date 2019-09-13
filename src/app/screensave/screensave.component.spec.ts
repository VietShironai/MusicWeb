import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreensaveComponent } from './screensave.component';

describe('ScreensaveComponent', () => {
  let component: ScreensaveComponent;
  let fixture: ComponentFixture<ScreensaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreensaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreensaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
