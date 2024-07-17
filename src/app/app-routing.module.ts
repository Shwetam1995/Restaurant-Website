import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './component/blog/blog.component';
import { HomeComponent } from './component/home/home.component';
import { MenuComponent } from './component/menu/menu.component';
import { AboutComponent } from './component/about/about.component';
import { MenuoneComponent } from './component/menuone/menuone.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'menu', component: MenuComponent,
    children: [
      { path: 'menuone', component: MenuoneComponent }, // Child route
    ]
  },
  { path: 'blog', component: BlogComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
