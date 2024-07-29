import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDisctrictComponent } from './single-disctrict.component';

describe('SingleDisctrictComponent', () => {
  let component: SingleDisctrictComponent;
  let fixture: ComponentFixture<SingleDisctrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleDisctrictComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleDisctrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
