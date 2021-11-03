import { AddItemAction, ShoppingActionTypes } from './store/add-item-action';

export function pokemonReducer(
  state: string[] = ['No pokemons yet, store empty'],
  action: AddItemAction
): any {
  console.log(action.type, state);
  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
}
