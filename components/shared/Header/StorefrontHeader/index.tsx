import React from 'react';
import styles from './styles.module.css';
import { InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../Logo';

{/* importação do Link para redirecionarmos o usuário para o login */}
import Link from 'next/link';

const StorefrontHeader: React.FC = () => {
  return (
    <Row className={styles.background}>
      <Col md={6} className="mt-2">
        <Logo  />
      </Col>

      {/* ajustando o tamanho do input de pesquisa e corrigindo o placeholder */}
      <Col md={6} className="mt-2 text-center">
        <Row>
          <Col md={6} className="mb-4 mb-md-0">
            <InputGroup>
              <FormControl placeholder="Pesquisar produto" />
            </InputGroup>
          </Col>

          <Col md={6}>
            <Row>
              <Col md={4} xs={4}>
                <FontAwesomeIcon icon={faSearch} color="var(--color-gray-light)" />
              </Col>

              <Col md={4} xs={4}>
                <FontAwesomeIcon icon={faShoppingCart} color="var(--color-gray-light)" />
              </Col>

              {/* adicionando o link para que quando o usuário clicar no ícone de usuário o mesmo
              seja redirecionado para o login */}
              <Col md={4} xs={4}>
                <Link href="/Auth/Login">
                  <a>
                    <FontAwesomeIcon icon={faUserCircle} color="var(--color-gray-light)" />
                  </a>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default StorefrontHeader;