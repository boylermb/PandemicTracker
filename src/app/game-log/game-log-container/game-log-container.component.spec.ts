import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameLogContainerComponent } from './game-log-container.component';

describe('GameLogContainerComponent', () => {
  let component: GameLogContainerComponent;
  let fixture: ComponentFixture<GameLogContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameLogContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameLogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
