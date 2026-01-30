import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugAdvertsComponent } from './sug-adverts.component';

describe('SugAdvertsComponent', () => {
  let component: SugAdvertsComponent;
  let fixture: ComponentFixture<SugAdvertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SugAdvertsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SugAdvertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
