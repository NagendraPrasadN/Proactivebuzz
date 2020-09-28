import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappuiComponent } from './whatsappui.component';

describe('WhatsappuiComponent', () => {
  let component: WhatsappuiComponent;
  let fixture: ComponentFixture<WhatsappuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsappuiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsappuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
