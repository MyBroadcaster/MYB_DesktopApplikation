import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchChatComponent } from './twitch-chat.component';

describe('TwitchChatComponent', () => {
  let component: TwitchChatComponent;
  let fixture: ComponentFixture<TwitchChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwitchChatComponent]
    });
    fixture = TestBed.createComponent(TwitchChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
