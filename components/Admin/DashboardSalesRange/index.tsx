import styles from './styles.module.css';

//import para fazer os gráficos
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import DashboardSalesRangeService from '../../../services/dashboardSalesRange';
import useSwr from 'swr';
import { toast } from 'react-toastify';

import { useSelector } from 'react-redux';
import Dashboard from '../../../dtos/Dashboard';

const defaultUrl = '/admin/v1/dashboard/sales_ranges';

const DashboardGraphic: React.FC = () => {
  const { min_date, max_date }: Dashboard = useSelector(state => state.dashboard);
  
  //fetch condicional:
  const { data, error } = useSwr(
    () => defaultUrl +
      (min_date || max_date) ?
      `?min_date=${min_date}&max_date=${max_date}` : '',
    DashboardSalesRangeService.index
  );

  if (error) {
    toast.error('Erro ao obter os dados para o gráfico do dashboard.')
    console.log(error);
  }

  return (
    <div className={styles.container}>
      
      <ResponsiveContainer width="100%" height={395}>
        <LineChart 
          width={500} 
          height={400} 
          data={data} 
          margin={{top:5, right:10, bottom:5, left:-20}} //um objeto
        >

          <Line 
            type="monotone" //tipo padrão deixa as linhas arredondadas
            dataKey="total_sold" //qual atributo vai usar nessa linha
            stroke="#7da1bc" //cor
          />

          <CartesianGrid 
            stroke="#ccc" 
            strokeDasharray="5 5" //espaçamento
            opacity={0.1}
          />

          {/*X= data*/}
          <XAxis 
            dataKey="date" 
            fontSize={12}
          />

          {/*Y= valor de vendas*/}
          <YAxis 
            fontSize={12} 
            dataKey="total_sold"
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#10163A",
              fontSize: 14
            }}
            formatter={
              (value, name, props) => ( [`R$ ${value.toFixed(2)}`, "Total vendido"])
            }
          />
          
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DashboardGraphic;