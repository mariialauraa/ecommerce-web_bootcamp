import api from './api';

interface DashboardSummary {
  //objeto:
  summary: {
    orders: number;
    products: number;
    profit: number;
    users: number;
  }
}

const DashboardSummaryService = {
  index(url: string) {
    return api.get<DashboardSummary>(url).then(resp => resp.data.summary); //só retorna o objeto em sí
  }
}

export default DashboardSummaryService;