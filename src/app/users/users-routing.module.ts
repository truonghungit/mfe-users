import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDetailPageComponent, UsersPageComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: UsersPageComponent,
  },
  {
    path: ':id',
    component: UserDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
