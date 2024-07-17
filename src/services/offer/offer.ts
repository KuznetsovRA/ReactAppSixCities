import {OfferApi, OfferByIdApi, OffersApi} from '../../types/offers-api';
import {APIRoute} from '../../service/const';
import {adaptOfferByIdApiToClient, adaptOffersApiToClient} from '../../adapters/adapt-server-to-client';
import {Offer, Offers} from '../../types/offers';
import {api} from '../../index';

export const getOfferById =  async (id:string): Promise<Offer> => {
    const {data} = await api.get<OfferByIdApi>(`${APIRoute.Hotels}/${id}`);
    return adaptOfferByIdApiToClient(data);
};

export const getOffersNearby = async (id:string): Promise<Offers> => {
    const {data} = await api.get<OffersApi>(`${APIRoute.Hotels}/${id}/nearby`);
    return data.map((offer: OfferApi) => adaptOffersApiToClient(offer))
};
