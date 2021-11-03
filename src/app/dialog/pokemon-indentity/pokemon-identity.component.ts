import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { colorsMapping, Pokemon } from '../../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-identity',
  templateUrl: './pokemon-identity.component.html',
  styleUrls: ['./pokemon-identity.component.scss']
})
export class PokemonIdentityComponent implements OnInit {

  public pokemon: Pokemon;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<Pokemon>,
    ) {
    this.pokemon = data;
  }

  ngOnInit(): void {
  }

  getTypes(): string {
    const typesList = this.pokemon.details.types.map(type => type.type.name);
    return typesList.join(', ');
  }

  getAbilities(): string {
    const typesList = this.pokemon.details.abilities.map(ability => ability.ability.name);
    return typesList.join(', ');
  }

  getEggsGroups(): string {
    const eggsGroupsList = this.pokemon.species.egg_groups.map(eggGroup => eggGroup.name);
    return eggsGroupsList.join(', ');
  }

  getFlavorTextEntries(): string {
    const flavorTextEntries = this.pokemon.species.flavor_text_entries.map(flavorTextEntry => flavorTextEntry.version.name);
    let ellipis = '';
    if (flavorTextEntries.length >= 8) {
      flavorTextEntries.length = 8;
      ellipis = '...';
    }
    return flavorTextEntries.join(', ') + ellipis;
  }

  getPokedexNumbersAndNames(): string {
    const flavorTextEntries = this.pokemon.species.pokedex_numbers.map(pokedexNumber => `${pokedexNumber.entry_number} (${pokedexNumber.pokedex.name})`);
    let ellipis = '';
    if (flavorTextEntries.length >= 4) {
      flavorTextEntries.length = 4;
      ellipis = '...';
    }
    return flavorTextEntries.join(', ') + ellipis;
  }

  getAllLanguagesNames(): string {
    const languages = this.pokemon.species.names.map(name => name.name);
    let ellipis = '';
    if (languages.length >= 5) {
      languages.length = 5;
      ellipis = '...';
    }
    return languages.join(', ') + ellipis;
  }

  /**
   * returns #RGBA colour based on type identified in colorsMapping
   */
  getColorFromMappingType(type: string): string {
    if (type) {
      return colorsMapping[type];
    }
  }

  public apply(): void {
    debugger;
    this.dialogRef.close(this.pokemon);
  }

}
