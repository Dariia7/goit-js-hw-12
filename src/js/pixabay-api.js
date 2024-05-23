
import axios from 'axios';

const API_KEY = '43978521-a6e17b35cb4219b57205c3217';

const BASE_URL = 'https://pixabay.com/api/';

const fetchPhotos = async (searchImage, page) => {
 
  const response = await axios(BASE_URL, {
    params: {
      key: API_KEY,
      q: searchImage,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: page,
      per_page: 15,
    },
  });
  return response.data;
};

export default fetchPhotos;