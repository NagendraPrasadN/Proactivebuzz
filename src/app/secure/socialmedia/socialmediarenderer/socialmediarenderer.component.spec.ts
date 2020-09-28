import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmediarendererComponent } from './socialmediarenderer.component';

describe('SocialmediarendererComponent', () => {
  let component: SocialmediarendererComponent;
  let fixture: ComponentFixture<SocialmediarendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialmediarendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialmediarendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
