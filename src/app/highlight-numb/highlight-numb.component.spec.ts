import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightNumbComponent } from './highlight-numb.component';

describe('HighlightNumbComponent', () => {
  let component: HighlightNumbComponent;
  let fixture: ComponentFixture<HighlightNumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightNumbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightNumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
