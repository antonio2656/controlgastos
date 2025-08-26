import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientePage } from './cliente/cliente.page';

export const routes: Routes = [
 { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule) },
  // otras rutas


{  path: 'cliente',
  loadChildren: () => import('./cliente/cliente.module').then(m => m.ClientePageModule)
}
,
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'nueva-obra',
    loadChildren: () => import('./obra/obra.module').then( m => m.ObraPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'obra',
    loadChildren: () => import('./obra/obra.module').then( m => m.ObraPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
