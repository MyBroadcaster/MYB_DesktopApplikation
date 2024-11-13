import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutobotComponent } from './autobot.component';

describe('AutobotComponent', () => {
  let component: AutobotComponent;
  let fixture: ComponentFixture<AutobotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutobotComponent]
    });
    fixture = TestBed.createComponent(AutobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
