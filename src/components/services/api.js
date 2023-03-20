import axios from 'axios';

export const fetchPhotos = async (query, page) => {
  const searchParams = new URLSearchParams({
    q: query,
    page: page,
    key: '33271792-fb75e177a9af11daf6327433e',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
  });

  const responce = await axios.get(`https://pixabay.com/api/?${searchParams}`);
  return responce.data;
};
