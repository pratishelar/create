import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/Customerlookup', pathMatch: 'full' },
  {
    path: 'Customerlookup',
    loadChildren: () =>
      import('./searchCustomer/search.module').then((m) => m.SearchModule),
  },
  {
    path: 'Newcustomer',
    loadChildren: () =>
      import('./newCustomer/newCustomerModule.module').then(
        (m) => m.NewCustomerModule
      ),
  },
  {
    path: 'ConfirmCustomer',
    loadChildren: () =>
      import('./confirmCustomer/confirmCustomer.module').then(
        (m) => m.ConfirmCustomerModule
      ),
  },

  {
    path: '**',
    loadChildren: () =>
      import('./searchCustomer/search.module').then((m) => m.SearchModule),
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
