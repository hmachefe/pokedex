import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Details, PokemonsApiResponse, Species } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  constructor(
    private http: HttpClient) {
  }

  private _processError(
    error: HttpErrorResponse
  ): any {
    if (!(error.error instanceof ErrorEvent)) {
      console.error(`Server side failure: back-end returned ${error.status} error code, reason is: ${error.error}`);
    } else {
      console.error('network error, or client side failure, reason is:' , error.error.message);
    }
    return throwError('Something bad happened; please try again later.');
}

  /**
   * Retrieves Pokemon items by (page) offset and limit
   */
  getCollectionByPage(
    offset: number,
    limit: number
  ): Observable<PokemonsApiResponse> {
    return this.http
      .get<any>(`${environment.pokemonApiUrl.collection}?offset=${offset}&limit=${limit}`)
      .pipe(catchError(this._processError));
  }

  /**
   * Retrieves pokemon details based on item's name
   */
  getDetailsByName(
    name: string
  ): Observable<Details> {
    return this.http
      .get<any>(`${environment.pokemonApiUrl.collection}/${name}`)
      .pipe(catchError(this._processError));
  }

  /**
   * Retrieves pokemon species based on item's name
   */
  getSpeciesByName(
    name: string
  ): Observable<Species> {
    return this.http
      .get<any>(`${environment.pokemonApiUrl.speciesUrl}/${name}`)
      .pipe(catchError(this._processError));
  }

}
