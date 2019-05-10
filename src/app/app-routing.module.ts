import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: 'home', loadChildren: './home/home.module#HomePageModule' },
  //{ path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
 // { path: 'tab1', loadChildren: './pages/tab1/tab1.module#Tab1PageModule' },
 // { path: 'tab2', loadChildren: './pages/tab2/tab2.module#Tab2PageModule' },
 { path: 'details/:id', loadChildren: './pages/details/details.module#DetailsPageModule' },
 { path: 'details', loadChildren: './pages/details/details.module#DetailsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
