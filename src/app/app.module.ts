import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { MatDialogModule } from '@angular/material/dialog';
import { PokemonIdentityComponent } from './dialog/pokemon-indentity/pokemon-identity.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { PokemonsDashboardComponent } from './components/pokemons-dashboard/pokemons-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { pokemonReducer } from './pokemon-reducer';
import { StoreComponent } from './store/store.component';
import { CapitalizeFirstPipe } from '../pipes/capitalize-first.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsDashboardComponent,
    PokemonIdentityComponent,
    StoreComponent,
    CapitalizeFirstPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    NgxPaginationModule,
    MatCardModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      pokemonName: pokemonReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
