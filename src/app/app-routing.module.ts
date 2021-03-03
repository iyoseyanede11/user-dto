import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./application/landing-page/landing-page.module').then(m => m.LandingPageModule)
  },
  {
    path: 'user-details',
    loadChildren: () => import('./application/user-details/user-details.module').then(m => m.UserDetailsModule)
  },
  {
    path: '**',
    loadChildren: () => import('./application/landing-page/landing-page.module').then(m => m.LandingPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
