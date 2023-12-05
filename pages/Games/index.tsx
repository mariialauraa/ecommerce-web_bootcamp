import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import MainComponent from '../../components/shared/MainComponent';
import Menu from '../../components/Storefront/Menu';
import Product from '../../components/Storefront/ProductItem';

import Pagination from '../../components/shared/Pagination';
import styles from './styles.module.css';

import ProductLicensesModal from '../../components/Storefront/ProductLicensesModal';
import withAuth from '../../components/withAuth';

const Games: React.FC = () => {
  //Qdo acessar a página o 'Modal' não é exibido
  const[show, setShow] = useState(false);

  //para setar o estado local do produto
  const handleProductClick = (): void => {
    handleShow();
  }

  //troca o estado do 'show' de T/F e F/T
  const handleShow = (): void => {
    setShow(!show);
  }

  return (
    <MainComponent>
      <Menu tab="my_games"/> {/*fica destacado 'Meus Games'*/}

      <Row>
        <Col md={3} sm={6} xs={12}>
          <Product 
            onClick={handleProductClick}
          />
        </Col>

        <Col md={3} sm={6} xs={12}>
          <Product 
            onClick={handleProductClick}
          />
        </Col>

        <Col md={3} sm={6} xs={12}>
          <Product 
            onClick={handleProductClick}
          />
        </Col>

        <Col md={3} sm={6} xs={12}>
          <Product 
            onClick={handleProductClick}
          />
        </Col>
      </Row>

      <ProductLicensesModal
        show={show}
        onHide={handleShow}
      />

      <Pagination 
        className={styles.pagination}
        total_pages={1}
        page={1}
      />
    </MainComponent>
  );
}

export default withAuth(Games);