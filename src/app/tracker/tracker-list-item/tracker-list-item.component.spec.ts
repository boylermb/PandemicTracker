import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerListItemComponent } from './tracker-list-item.component';

describe('TrackerListItemComponent', () => {
  let component: TrackerListItemComponent;
  let fixture: ComponentFixture<TrackerListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackerListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
