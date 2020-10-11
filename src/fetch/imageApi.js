import axios from "axios";


const fetchImage = (query, page) => {
    return axios
    .get(`https://pixabay.com/api/?q=${query}&page=${page}&key=17953661-fbb86eb9264530d2720389de2&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => response.data.hits);
}

export default {
  fetchImage,
};