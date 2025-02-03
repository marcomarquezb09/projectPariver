import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompraTicketsPage } from './compra-tickets.page';

describe('CompraTicketsPage', () => {
  let component: CompraTicketsPage;
  let fixture: ComponentFixture<CompraTicketsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraTicketsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
