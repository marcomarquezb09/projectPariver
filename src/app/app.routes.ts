import { Routes } from '@angular/router';

export const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'compra-tickets',
    loadComponent: () => import('./compra-tickets/compra-tickets.page').then( m => m.CompraTicketsPage)
  },
  {
    path: 'compra-tickets',
    loadComponent: () => import('./compra-tickets/compra-tickets.page').then( m => m.CompraTicketsPage)
  },
  {
    path: 'informacion-ticket',
    loadComponent: () => import('./informacion-ticket/informacion-ticket.page').then( m => m.InformacionTicketPage)
  },
  {
    path: 'inicio-sesion',
    loadComponent: () => import('./inicio-sesion/inicio-sesion.page').then( m => m.InicioSesionPage)
  },
  {
    path: 'logout',
    loadComponent: () => import('./logout/logout.page').then( m => m.LogoutPage)
  },
  {
    path: 'cine',
    loadComponent: () => import('./cine/cine.page').then( m => m.CinePage)
  },
  {
    path: 'pelicula',
    loadComponent: () => import('./pelicula/pelicula.page').then( m => m.PeliculaPage)
  },
];
