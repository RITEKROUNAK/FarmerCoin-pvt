import { Axios, Canceler } from '../../../core/axios';
import * as actions from '../../actions';
import api from '../../../core/api';

export const fetchAuthorList = (authorId) => async (dispatch) => {

  dispatch(actions.getAuthorList.request(Canceler.cancel));

  try {
    let filter = authorId ? 'filters[id][$eq]='+authorId : '';
    const { data } = await Axios.get(`${api.baseUrl}${api.authors}?${filter}`, {
      cancelToken: Canceler.token,
      params: {}
    });
    console.log(data);
    dispatch(actions.getAuthorList.success(data.data.attributes.results));
  } catch (err) {
    dispatch(actions.getAuthorList.failure(err));
  }
};

export const fetchAuthorRanking = () => async (dispatch) => {

  dispatch(actions.getAuthorRanking.request(Canceler.cancel));

  try {
    const { data } = await Axios.get(`${api.baseUrl}${api.authorsSales}`, {
      cancelToken: Canceler.token,
      params: {}
    });
    dispatch(actions.getAuthorRanking.success(data.data.attributes.results));
  } catch (err) {
    dispatch(actions.getAuthorRanking.failure(err));
  }
};
