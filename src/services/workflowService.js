import api, {isSuccess} from './ApiService';

const base_path = '/workflows';

export const getSteps = () => {
  return api
    .get(`${base_path}/steps`)
    .then(response => {
      if (isSuccess(response)) {
        return response.data;
      }
      return Promise.reject(response.data);
    })
    .catch(err => {
      return Promise.reject(err);
    });
};
