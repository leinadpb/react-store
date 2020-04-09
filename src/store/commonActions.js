import axios from 'axios';

export const BASE_URL = 'https://api.github.com/users/leinadpb';

export const fetchData = async (dispatch, resource) => {
  let rs = undefined;
  try {
    switch(resource.method) {
      case 'DELETE':
        rs = await axios.delete(`${BASE_URL}${resource.url}`)
        break;
      default:
        rs = await axios.get(`${BASE_URL}${resource.url}`);
    }
  } catch(e) {
    console.log(`Error fetching data: ${e}`);
  } finally {
    console.log(resource);
    console.log(rs.data);
    console.log('---');
  }
  return dispatch({
    type: resource.actionType,
    payload: rs.data
  });
}
