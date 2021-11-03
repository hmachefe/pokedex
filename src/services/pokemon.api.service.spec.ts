import { TestBed } from '@angular/core/testing';
import { PokemonApiService } from './pokemon.api.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../environments/environment';

describe('Service: Pokemon', () => {

  let service: PokemonApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PokemonApiService, HttpTestingController]
    });
    service = TestBed.inject(PokemonApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // httpMock.verify();
  });

  it('check pokemon api service',  () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve pokemons list from REST api',  () => {
    const numberOfItems = 20;
    service
      .getCollectionByPage(0, 20).subscribe((pokemonsResponse) => {
        expect(pokemonsResponse.count).toBeGreaterThan(1000);
        expect(pokemonsResponse.results.length).toBeLessThanOrEqual(numberOfItems);
      });
  });

  it('should retrieve pokemon species from REST api',  () => {
    const numberOfItems = 20;
    service
      .getSpeciesByName('venusaur').subscribe((species) => {
        expect(species.base_happiness).toBeGreaterThanOrEqual(0);
        expect(species.egg_groups.length).toBeGreaterThanOrEqual(0);
    });
    /*
        const request = httpMock.expectOne(`${environment.pokemonApiUrl.collection}?offset=${0}&limit=${20}`);
        expect(request.request.method).toBe('POST');*/
  });

});
