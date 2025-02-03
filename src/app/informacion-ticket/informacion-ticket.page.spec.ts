import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformacionTicketPage } from './informacion-ticket.page';

describe('InformacionTicketPage', () => {
  let component: InformacionTicketPage;
  let fixture: ComponentFixture<InformacionTicketPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionTicketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
