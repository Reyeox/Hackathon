import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackathonItemsComponent } from './hackathon-items.component';

describe('HackathonItemsComponent', () => {
  let component: HackathonItemsComponent;
  let fixture: ComponentFixture<HackathonItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackathonItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackathonItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
