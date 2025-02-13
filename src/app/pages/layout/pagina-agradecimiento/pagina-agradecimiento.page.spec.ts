import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaAgradecimientoPage } from './pagina-agradecimiento.page';

describe('PaginaAgradecimientoPage', () => {
  let component: PaginaAgradecimientoPage;
  let fixture: ComponentFixture<PaginaAgradecimientoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaAgradecimientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
