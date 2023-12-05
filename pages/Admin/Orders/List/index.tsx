import { useState, useEffect } from "react";
import AdminComponent from "../../../../components/shared/AdminComponent";
import TitleAdminPanel from "../../../../components/shared/TitleAdminPanel";

import styles from './styles.module.css';

import OrdersList from "../../../../components/shared/OrdersList";
import AdminOrdersService from "../../../../services/adminOrders";
import Pagination from "../../../../components/shared/Pagination";

import useSwr from 'swr';
import { toast } from "react-toastify";
import { useRouter } from 'next/router';
import UrlService from "../../../../util/UrlService";

const defaultUrl = '/admin/v1/orders';

const Orders: React.FC = () => {
  const[url, setUrl] = useState(defaultUrl);
  const router = useRouter();
  const { data, error } = useSwr(url, AdminOrdersService.index);

  //toda vez que mudar a paginação, automaticamente a 'url' vai mudar
  //e com isso o 'swr' revalida o 'cache'
  useEffect(() => {
    setUrl(
      defaultUrl +
      UrlService.execute({ page: router?.query?.page })
    );
  }, [router?.query?.page])

  if (error) {
    toast.error('Erro ao obter os dados dos pedidos!');
    console.log(error);
  }

  return (
    <AdminComponent>
      <br />
        <TitleAdminPanel title="Vendas" path="Dashboard > Vendas" newPath={""}/>

        <div className={styles.admin_panel}>
          <OrdersList 
            orders={data?.orders}
            admin={true}
          />

          <Pagination {...data?.meta}/>
        </div>
    </AdminComponent>
  );
}

export default Orders;