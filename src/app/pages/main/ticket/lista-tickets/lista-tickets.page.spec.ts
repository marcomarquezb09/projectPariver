import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaTicketsPage } from './lista-tickets.page';

describe('ListaTicketsPage', () => {
  let component: ListaTicketsPage;
  let fixture: ComponentFixture<ListaTicketsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTicketsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
