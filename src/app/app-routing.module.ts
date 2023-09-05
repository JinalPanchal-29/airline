import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MyFlightsComponent } from './components/my-flights/my-flights.component';
import { BrowseFlightsComponent } from './components/browse-flights/browse-flights.component';

const routes: Routes = [
  { path: 'components/home', component: HomeComponent },
  { path: 'components/my-flights', component: MyFlightsComponent },
  { path: 'components/browse-flights', component: BrowseFlightsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

