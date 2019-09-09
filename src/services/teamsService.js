// @flow

import axios, { AxiosPromise } from 'axios';
import { API_URL } from '../helpers/constants';
import type { Team } from '../types/Team';

const teamsService = {
  getTeams(): AxiosPromise<Array<Team>> {
    return axios.get(`${API_URL}/teams?_embed=employees&_sort=name`);
  },
};


export default teamsService;
