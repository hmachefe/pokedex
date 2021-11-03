import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { PokemonsDashboardComponent } from './components/pokemons-dashboard/pokemons-dashboard.component';

const routes: Routes = [
  { path: '', component: PokemonsDashboardComponent },
  { path: 'store', component: StoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
