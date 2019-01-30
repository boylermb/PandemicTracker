import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameLogControlsComponent } from './game-log-controls.component';

describe('GameLogControlsComponent', () => {
  let component: GameLogControlsComponent;
  let fixture: ComponentFixture<GameLogControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameLogControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameLogControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
