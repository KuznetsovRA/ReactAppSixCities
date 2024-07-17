import {Offers} from './types/offers';
import {SortNameType} from './types/const';
import {CitiesName} from './const';

export function getOffersByCity(offers: Offers,city: CitiesName): Offers {
  return offers.filter((offer) => offer.city === city);
}

export function getOffersBySort(offers: Offers, sortType: SortNameType): Offers {

  switch (sortType) {
    case 'Popular':
      return  offers
        .slice()
        .sort((a, b) => {
          const nameA = a.id;
          const nameB = b.id;
          if (nameA < nameB) {return -1;}
          else {return 1;}
        });
    case 'Price: high to low':
      return  offers
        .slice()
        .sort((a, b) => a[`price`] - b[`price`]);
    case 'Price: low to high':
      return offers
        .slice()
        .sort((a, b) => b[`price`] - a[`price`]);
    case 'Top rated first':
      return offers
        .slice()
        .sort((a, b) => b[`rating`] - a[`rating`]);
  }
}
