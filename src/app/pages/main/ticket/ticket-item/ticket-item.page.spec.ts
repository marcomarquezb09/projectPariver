import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketItemPage } from './ticket-item.page';

describe('TicketItemPage', () => {
  let component: TicketItemPage;
  let fixture: ComponentFixture<TicketItemPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(TicketItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
