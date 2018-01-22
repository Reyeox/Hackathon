import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullHeightBlockComponent } from './full-height-block.component';

describe('FullHeightBlockComponent', () => {
  let component: FullHeightBlockComponent;
  let fixture: ComponentFixture<FullHeightBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullHeightBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullHeightBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
