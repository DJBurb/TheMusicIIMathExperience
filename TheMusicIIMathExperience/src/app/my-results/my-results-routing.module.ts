import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyResultsPage } from './my-results.page';

const routes: Routes = [
  {
    path: '',
    component: MyResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyResultsPageRoutingModule {}
