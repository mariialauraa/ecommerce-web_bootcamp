import ProductHome from './ProductHome';

export default interface HomeIndexData {
  featured: ProductHome[];
  'last_releases': ProductHome[]; /* as 'aspas' é devido ao uso do ( _ ) */
  cheapest: ProductHome[];
};