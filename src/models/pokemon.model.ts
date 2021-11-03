export enum colorsMapping {
  bug = '#B1C12E',
  brown = '#a52a2a',
  blue = '#0000ff',
  dark = '#4F3A2D',
  red = '#ff0000',
  dragon = '#755EDF',
  electric = '#F8D030',
  fairy = '#F4B1F4',
  fighting = '#82351D',
  fire = '#E73B0C',
  flying = '#A3B3F7',
  ghost = '#6060B2',
  grass = '#74C236',
  green = '#00ff00',
  ground = '#D3B357',
  ice = '#A3E7FD',
  normal = '#C8C4BC',
  poison = '#934594',
  psychic = '#ED4882',
  rock = '#B9A156',
  steel = '#B5B5C3',
  water = '#3295F6',
  yellow = '#ffff00',
}

export interface Pokemon {
  details?: Details;
  description?: string;
  index?: string;
  name: string;
  url: string;
  species: Species;
}

export interface PokemonsApiResponse {
  count: number;
  next: string;
  results: Pokemon[];
}

export interface Details {
  abilities?: any[];
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types?: any[];
  base_experience: number;
}

export interface Species {
  base_happiness: number;
  capture_rate: 45;
  color: {
    name: string;
    url: string;
  };
  egg_groups: {
    name: string;
    url: string;
  }[];
  evolution_chain: {
    url: string;
  };
  evolves_from_species: {
    name: string;
    url: string;
  };
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
    };
    version: {
      name: string;
      url: string;
    };
  }[];
  form_descriptions: any[];
  forms_switchable: boolean;
  gender_rate: 1;
  genera: {
    genus: string;
    language: {
      name: string;
      url: string;
    };
  }[];
  generation: {
    name: string;
    url: string;
  };
  growth_rate: {
    name: string;
    url: string;
  };
  habitat: {
    name: string;
    url: string;
  };
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
    };
    name: string;
  }[];
  order: number;
  pal_park_encounters: {
    area: {
      name: string,
      url: string
    };
    base_score: number;
    rate: number;
  }[];
  pokedex_numbers: {
    entry_number: number
    pokedex: {
      name: number;
      url: number;
    }
  }[];
  shape: {
    name: string;
    url: string;
  };
  varieties: {
    is_default: true
    pokemon: {
      name: string;
      url: string;
    }
  }[];
}
