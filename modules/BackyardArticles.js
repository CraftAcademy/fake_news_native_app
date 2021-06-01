import axios from 'axios';
import store from '../state/store/configureStore';
import * as Location from 'expo-location';

const BackyardArticles = {
  async index(coords) {
    try {
      let { latitude, longitude } = coords;
      let response = await axios.get(
        `/backyards/?lat=${latitude}&lon=${longitude}`
      );
      store.dispatch({
        type: 'SET_BACKYARD_VIEW',
        payload: {
          backyardArticles: response.data.backyard_articles,
          location: response.data.location,
        },
      });
    } catch (error) {}
  },

  async show(id) {
    try {
      const response = await axios.get(`/backyards/${id}`);
      store.dispatch({
        type: 'SET_SINGLE_ARTICLE_VIEW',
        payload: {
          article: response.data.backyard_article,
        },
      });
    } catch (error) {}
  },
};

export default BackyardArticles;

export const getLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    return;
  }

  let location = await Location.getCurrentPositionAsync({});
  BackyardArticles.index(location.coords);
};
