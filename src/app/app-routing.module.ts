import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './Route-guards/admin-home/admin-home.component';
import {AdminGuardGuard} from './Route-guards/admin-guard.guard';

const routes: Routes = [
  {path:'admin',component:AdminHomeComponent,canActivate:[AdminGuardGuard]},
  { path: 'orders', loadChildren: () => import('./Lazy-Loading/orders/orders.module').then(m => m.OrdersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
