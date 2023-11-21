import api from './api';

import ProductHome from '../dtos/ProductHome';

interface HomeIndexData {
  featured: ProductHome[];  
  'last_releases': ProductHome[]; /* as 'aspas' é devido ao uso do ( _ ) */
  cheapest: ProductHome[];
};

/* responsável por fazer a requisição 'get' para nossa 'api' */
const HomeService = {
  index: (url: string) => {
    /* o 'then' tira um 'data' do objeto */
    return api.get<HomeIndexData>(url).then(response => response.data);
  }
}

export default HomeService;