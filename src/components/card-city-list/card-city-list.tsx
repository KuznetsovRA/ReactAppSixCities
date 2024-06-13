import CardCity from '../card-city/card-city';
import {Offer, Offers} from '../../types/offers';
import {useCallback, useState} from 'react';

type CardCityListType = {
  offers: Offers;
}


export function CardCityList ({offers}:CardCityListType):JSX.Element {

  const [, setActiveCard] = useState<null | Offer>(null)
  const handlePointerOver = useCallback((offer: Offer) => {
    setActiveCard(offer);
  }, [])
  const handlePointerLeave = useCallback(() => {
    setActiveCard(null);
  }, [])
  return (
    <>
      {offers.map((item:Offer, i:number) => {
        return <CardCity key={item.id} item={item} onPointerOverCard={handlePointerOver} onPointerLeaveCard={handlePointerLeave}/>
      })}
    </>
  )
}
