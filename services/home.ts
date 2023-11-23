import api from './api';
import HomeIndexData from '../dtos/HomeIndexData';

/* responsável por fazer a requisição 'get' para nossa 'api' */
const HomeService = {
  index: (url: string) => {
    /* o 'then' tira um 'data' do objeto */
    return api.get<HomeIndexData>(url).then(response => response.data);
  }
}

export default HomeService;