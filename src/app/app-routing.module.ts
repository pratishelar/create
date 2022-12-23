import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

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
    path: 'CustomerDetailsAndLines',
    loadChildren: () =>
      import('./customerDetailsAndLines/customerDetailsAndLines.module').then(
        (m) => m.CustomerDetailsAndLinesModule
      ),
  },
  {
    path: 'HardwareUpgrade',
    loadChildren: () =>
      import('./hardwareUpgrade/HardwareUpgrade.module').then(
        (m) => m.HardwareUpgradeModule
      ),
  },
  {
    path: 'ChangeRatePlan',
    loadChildren: () =>
      import('./changeRateplan/ChangeRateplan.module').then(
        (m) => m.ChangeRateplanModule
      ),
  },
  {
    path: 'PhoneNumberSelection',
    loadChildren: () =>
      import('./phoneNumberSelection/PhoneNumberSelection.module').then(
        (m) => m.PhoneNumberSelectionModule
      ),
  },
  {
    path: 'DeviceSelection',
    loadChildren: () =>
      import('./deviceSelection/DeviceSelection.module').then(
        (m) => m.DeviceSelectionModule
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
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
