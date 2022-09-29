import { Axios, Canceler } from '../../../core/axios';
import * as actions from '../../actions';
import api from '../../../core/api';

export const fetchHotCollections = (collectionId) => async (dispatch) => {
  dispatch(actions.getHotCollections.request(Canceler.cancel));

  try {
    let filter = collectionId ? 'filters[id][$eq]='+collectionId : '';
    const relations = [
      'author',
      'author.avatar',
      'author.banner',
      'banner',
    ];
    let populate = `populate=${relations}&`;
    const { data } = await Axios.get(`${api.baseUrl + api.hotCollections}?${populate}${filter}`, {
      cancelToken: Canceler.token,
      params: {}
    });
    dispatch(actions.getHotCollections.success(data.data));
  } catch (err) {
    dispatch(actions.getHotCollections.failure(err));
  }
};
