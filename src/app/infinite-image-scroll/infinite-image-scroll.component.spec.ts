import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteImageScrollComponent } from './infinite-image-scroll.component';

describe('InfiniteImageScrollComponent', () => {
  let component: InfiniteImageScrollComponent;
  let fixture: ComponentFixture<InfiniteImageScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfiniteImageScrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfiniteImageScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
