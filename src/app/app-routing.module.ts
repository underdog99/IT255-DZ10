import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Primer1Component } from './components/primer1/primer1.component';
import { Primer2Component } from './components/primer2/primer2.component';
import { Primer3Component } from './components/primer3/primer3.component';
import { Primer4Component } from './components/primer4/primer4.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'primer1', component: Primer1Component },
  { path: 'primer2', component: Primer2Component },
  { path: 'primer3', component: Primer3Component },
  { path: 'primer4', component: Primer4Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
