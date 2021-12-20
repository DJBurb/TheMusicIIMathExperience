import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'addition',
    loadChildren: () => import('./addition/addition.module').then( m => m.AdditionPageModule)
  },
  {
    path: 'subtraction',
    loadChildren: () => import('./subtraction/subtraction.module').then( m => m.SubtractionPageModule)
  },
  {
    path: 'multiplication',
    loadChildren: () => import('./multiplication/multiplication.module').then( m => m.MultiplicationPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
