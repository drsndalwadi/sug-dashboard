import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugSidebarComponent } from './sug-sidebar.component';

describe('SugSidebarComponent', () => {
  let component: SugSidebarComponent;
  let fixture: ComponentFixture<SugSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SugSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SugSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
