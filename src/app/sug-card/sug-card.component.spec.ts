import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugCardComponent } from './sug-card.component';

describe('SugCardComponent', () => {
  let component: SugCardComponent;
  let fixture: ComponentFixture<SugCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SugCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SugCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
