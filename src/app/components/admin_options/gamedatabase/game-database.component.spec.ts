import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDatabaseComponent } from './game-database.component';

describe('GameDatabaseComponent', () => {
  let component: GameDatabaseComponent;
  let fixture: ComponentFixture<GameDatabaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameDatabaseComponent]
    });
    fixture = TestBed.createComponent(GameDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
