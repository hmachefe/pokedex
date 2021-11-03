import { Action } from '@ngrx/store';

export enum ShoppingActionTypes {
  ADD_ITEM = '[SHOPPING] Add Item'
}

export class AddItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM;
  constructor(public payload: string) {}
}
