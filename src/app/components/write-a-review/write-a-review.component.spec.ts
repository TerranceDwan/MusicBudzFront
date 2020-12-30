import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteAReviewComponent } from './write-a-review.component';

describe('WriteAReviewComponent', () => {
  let component: WriteAReviewComponent;
  let fixture: ComponentFixture<WriteAReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteAReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteAReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
