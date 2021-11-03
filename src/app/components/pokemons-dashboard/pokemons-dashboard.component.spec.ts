import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonsDashboardComponent } from './pokemons-dashboard.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { PokemonApiService } from '../../../services/pokemon.api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Store, StoreModule } from '@ngrx/store';
import { pokemonReducer } from '../../pokemon-reducer';
import { RouterTestingModule } from '@angular/router/testing';

describe('PokemonHomepageComponent', () => {
  let component: PokemonsDashboardComponent;
  let fixture: ComponentFixture<PokemonsDashboardComponent>;
  let matSpinner;
  let h1;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        NgxPaginationModule,
        HttpClientModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
        RouterTestingModule,
        StoreModule.forRoot({
          pokemonName: pokemonReducer
        })
      ],
      declarations: [PokemonsDashboardComponent],
      providers: [PokemonApiService, Store]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display spinner by default', () => {
    matSpinner = fixture.nativeElement.querySelector('mat-spinner');
    expect(matSpinner).toBeTruthy();
  });

  it('should display welcoming header', () => {
    h1 = fixture.nativeElement.querySelector('h1');
    expect(h1).toBeTruthy();
    expect(h1.innerText).toBe('Welcome to my Pokedex !');
  });

});
