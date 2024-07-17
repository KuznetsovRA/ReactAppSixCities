import {City} from './types/city';
import {SortNameType} from './types/const';

export const SORT_TYPE_NAMES: SortNameType[] = [`Popular`, `Price: low to high`, `Price: high to low` , `Top rated first`]

export const CITIES: City[] = [
  {
    'latitude': 48.858906,
    'longitude': 2.3120158,
    'zoom': 10,
    'title': 'Paris',
  },
  {
    'latitude': 50.95779,
    'longitude': 6.8972834,
    'zoom': 10,
    'title': 'Cologne',
  },
  {
    'latitude': 50.855024,
    'longitude': 4.3403707,
    'zoom': 10,
    'title': 'Brussels',
  },
  {
    'latitude': 52.3547498,
    'longitude': 4.8339214,
    'zoom': 10,
    'title': 'Amsterdam',
  },
  {
    'latitude': 53.5586941,
    'longitude': 9.7877415,
    'zoom': 10,
    'title': 'Hamburg',
  },
  {
    'latitude': 51.2385413,
    'longitude': 6.7443112,
    'zoom': 10,
    'title': 'Dusseldorf',
  },
];
export type CitiesName = `Paris` | `Cologne` | `Brussels` | `Amsterdam` | `Hamburg` | `Dusseldorf`
export const CitiesList: CitiesName[] = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`]
