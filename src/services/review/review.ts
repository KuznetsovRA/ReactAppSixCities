import {ReviewApi, ReviewPost} from '../../types/offers-api';
import {APIRoute} from '../../service/const';
import {adaptReviewToClient} from '../../adapters/adapt-server-to-client';
import {api} from '../../index';

export const getReviewsByOfferId  =  async (id:string): Promise<ReviewApi[]> => {
  const {data} = await api.get<ReviewApi[]>(`${APIRoute.Comments}/${id}`);
  return data.map((review: ReviewApi) => adaptReviewToClient(review));
};

export const sendCommentByOfferId  = async (id:string | undefined, commentBody:ReviewPost): Promise<ReviewApi> => {
  if (!id) {
    return Promise.reject(new Error('ID is required for posting a comment. Contact technical support.'));
  }

  try {
    const { data } = await api.post<ReviewApi>(`${APIRoute.Comments}/${id}`, commentBody);
    return adaptReviewToClient(data);
  } catch (error) {
    console.error('Error while posting comment:', error);
    return Promise.reject(error);
  }

};

``
