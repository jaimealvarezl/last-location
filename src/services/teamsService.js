import axios from 'axios';
import { API_URL } from '../helpers/constants';

const teamsService = {
  getTeams() {
    return axios.get(`${API_URL}/teams?_embed=employees`);
  },
};


export default teamsService;
