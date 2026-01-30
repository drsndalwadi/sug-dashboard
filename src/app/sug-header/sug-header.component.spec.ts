import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugHeaderComponent } from './sug-header.component';

describe('SugHeaderComponent', () => {
  let component: SugHeaderComponent;
  let fixture: ComponentFixture<SugHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SugHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SugHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
