import { Component, OnInit } from '@angular/core';
import { Details, Pokemon, PokemonsApiResponse, Species } from '../../../models/pokemon.model';
import { environment } from '../../../environments/environment';
import { PokemonApiService } from '../../../services/pokemon.api.service';
import { MatDialog } from '@angular/material/dialog';
import { PokemonIdentityComponent } from '../../dialog/pokemon-indentity/pokemon-identity.component';
import { Store } from '@ngrx/store';
import { AddItemAction  } from '../../store/add-item-action';
import { AppState } from '../../store/app-state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemons-dashboard',
  templateUrl: './pokemons-dashboard.component.html',
  styleUrls: ['./pokemons-dashboard.component.scss']
})
export class PokemonsDashboardComponent implements OnInit {
  pokemonsLoading: boolean;
  pokemons: PokemonsApiResponse;
  currentPage: number;
  maxItemsByPage: number;
  totalCount: number;
  welcomingTitle: string;

  constructor(
    private store: Store<AppState>,
    private pokemonApiService: PokemonApiService,
    private dialog: MatDialog,
    protected router: Router
  ) {
  }

  ngOnInit(): void {
    this.pokemonsLoading = true;
    this.currentPage = 0;
    this.maxItemsByPage = environment.maxItemsByPage;
    this.welcomingTitle = 'Welcome to my Pokedex !';
    this.retrievePokemons();
  }

  onPageChanged($event): void {
    this.currentPage = $event;
    this.pokemonApiService
      .getCollectionByPage((this.currentPage - 1) * this.maxItemsByPage, this.maxItemsByPage)
      .subscribe((response: PokemonsApiResponse) => {
        this._processPokemons(response);
    });
  }

  /**
   * Gets "paginated" pokemons from API and process them
   */
  retrievePokemons(): void {
    this.pokemonApiService
      .getCollectionByPage(this.currentPage, this.maxItemsByPage)
      .subscribe((response: PokemonsApiResponse) => {
        this.totalCount = response.count;
        this._processPokemons(response);
      });
  }

  /**
   * Figure out pokemon index, then get its details from API
   */
  private _processPokemons(response: PokemonsApiResponse): void {
    this.pokemons = response;

    // tslint:disable-next-line:no-non-null-assertion
    if (this.pokemons!.results!.length) {
      for (const pokemon of this.pokemons.results) {
        const pokemonSlashedPattern = '/pokemon/';
        const pokemonSlashedPatternPosition = pokemon.url.indexOf(pokemonSlashedPattern);
        pokemon.index = pokemon.url.substring(pokemonSlashedPatternPosition + pokemonSlashedPattern.length, pokemon.url.length - 1);
        this.getPokemonDetails(pokemon);
      }
    }
  }

  /**
   * Gets pokemon details from api and populate model properties
   */
  getPokemonDetails(pokemon: Pokemon): void {
    this.pokemonApiService
      .getDetailsByName(pokemon.name)
      .subscribe((details: Details) => {
        pokemon.details = details;
        this.pokemonsLoading = false;
      });
  }

  /**
   * Select Pokemon from hyperlink, get its species, popup its identity card
   */
  public onPokemonSelected(pokemon: Pokemon, $event): boolean {
    $event.stopPropagation();
    this.pokemonApiService
      .getSpeciesByName(pokemon.name)
      .subscribe((species: Species) => {
        pokemon.species = species;
        const dialogRef = this.dialog.open(PokemonIdentityComponent, {
          data: pokemon,
        });
        dialogRef.afterClosed().subscribe(selectedPokemon => {
          this.store.dispatch(new AddItemAction(selectedPokemon.name));
        });
      });
    return false;
  }

  public navigateToStore(): void {
    this.router.navigateByUrl('/store');
  }

}


