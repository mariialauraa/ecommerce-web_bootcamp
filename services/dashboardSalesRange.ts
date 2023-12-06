import api from './api';

interface SalesRangeItem {
  //não sei o nome do atributo, só que é uma chave do tipo 'string', e vai ser um atributo numérico
  [key: string]: number;
}

interface DashboardSalesRange {
  sales_range: SalesRangeItem[];
}

const DashboardSalesRangeService = {
  index(url: string) {
    return api.get<DashboardSalesRange>(url).then(resp => resp.data.sales_range);
  }
}

export default DashboardSalesRangeService;