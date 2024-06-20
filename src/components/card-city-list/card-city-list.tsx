import CardCity from '../card-city/card-city';
import {Offer, Offers} from '../../types/offers';

type CardCityListType = {
  offers: Offers;
  cardClassName: string;
  onPointerOverCard: (offer: Offer) => void;
  onPointerLeaveCard: () => void;
}

export function CardCityList ({offers, cardClassName, onPointerOverCard,  onPointerLeaveCard}:CardCityListType):JSX.Element {
  return (
    <>
      {offers.map((item:Offer, i:number) => {
        return <CardCity key={item.id} cardClassName={cardClassName} item={item} onPointerOverCard={onPointerOverCard} onPointerLeaveCard={onPointerLeaveCard}/>
      })}
    </>
  )
}
