import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
  children:[
    { path: '', loadChildren: () => import('./welcome-page/welcome-page.module').then(m => m.WelcomePageModule) },
    { path: 'table', loadChildren: () => import('./table/table.module').then(m => m.TableModule) }
  ] },
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
