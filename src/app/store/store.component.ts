import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app-state';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  message$: Observable<string>;

  constructor(private store: Store<AppState>) {

    this.message$ = this.store.select('pokemonName');
  }

  ngOnInit(): void {
  }

}
