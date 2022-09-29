import { Axios } from '../../../core/axios';
import api from '../../../core/api';

export const postContactForm = (form) => async () => {
    try {
        const { data } = await Axios.post(`${api.baseUrl}${api.contactUs}`, form);

        return Promise.resolve(data.data.attributes);
    } catch (err) {
        return Promise.reject(err);
    }
};