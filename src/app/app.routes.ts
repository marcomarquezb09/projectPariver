import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/layout/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'logout',
    loadComponent: () => import('./pages/layout/logout/logout.page').then( m => m.LogoutPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/layout/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'cine',
    loadComponent: () => import('./pages/main/cine/cine.page').then( m => m.CinePage)
  },
  {
    path: 'pelicula',
    loadComponent: () => import('./pages/main/pelicula/pelicula.page').then( m => m.PeliculaPage)
  },
  {
    path: 'ticket-item',
    loadComponent: () => import('./pages/main/ticket/ticket-item/ticket-item.page').then( m => m.TicketItemPage)
  },

  {
    path: 'lista-tickets',
    loadComponent: () => import('./pages/main/ticket/lista-tickets/lista-tickets.page').then( m => m.ListaTicketsPage)
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

];
