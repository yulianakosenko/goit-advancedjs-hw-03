const API_KEY = '53062520-ab6df8030023bb65348d73bcb'; //
const BASE_URL = 'https://pixabay.com/api/';

// Робимо окрему функцію для HTTP-запиту
export function fetchImages(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`${BASE_URL}?${params.toString()}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.status);
    }
    return resp.json();
  });
}
