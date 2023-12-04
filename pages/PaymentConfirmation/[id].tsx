import MainComponent from "../../components/shared/MainComponent";
import StyledButton from "../../components/shared/StyledButton";

import styles from './styles.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faGamepad, faCheckSquare } from "@fortawesome/free-solid-svg-icons";

import BlueBackground from "../../components/shared/BlueBackground";

import { Col, Row, Badge } from "react-bootstrap";

import withAuth from "../../components/withAuth";

import useSwr from 'swr';
import { useRouter } from 'next/router';

import OrderService from "../../services/order";
import { toast } from "react-toastify";

const PaymentConfirmation: React.FC = () => {
  const router = useRouter();

  //faz a desestruturação de todos os 'query params' que tem na url e pega apenas o 'id'
  const { id } = router.query;

  const { data, error } = useSwr(
    //fetch condicional, só será realizado se o retorno da função que 
    //foi passada no primeiro parâmetro do 'hook useSwr' não for nulo
    //enquanto o 'id' não estiver preenchido ou disponível, o 'swr' não irá realizar o fetch
    () => id ? `/storefront/v1/orders/${id}` : null, OrderService.show
  );

  if (error) {
    toast.error('Erro ao obter os dados do pedido!');
    console.log(error);
  }

  return (
    <MainComponent>
      <div className="mt-4 mb-5">
        <strong>Pagamento Recebido</strong>
        <strong className={styles.secondary_color}>{` #${data?.id}`}</strong>

        <div className="float-right">
          <StyledButton
            action={"Voltar para a Loja"}
            icon={faArrowLeft}
            type_button="blue"
            onClick={() => router.push('/')}
            type="button"
          />
        </div>
      </div>

      <div className="mt-4">
        <div className={styles.blue_text}>
          <FontAwesomeIcon icon={faCheckSquare} />
          <strong> Sucesso: </strong>
          <span>Obrigado por seu pedido! Você receberá um e-mail em breve.</span>
        </div>
      </div>

      <BlueBackground>
        <strong>PRODUTO</strong>
        <strong className="float-right">VALOR</strong>

        {
          data?.line_items?.map(
            (item, index) => (
              <div key={index}>
                <hr className={styles.line} />

                <Row className={styles.product}>
                  <Col sm={3} xs={12} className="text-center">
                    <img 
                      src="/assets/product-image.png"
                      alt={item?.product} 
                    />
                  </Col>

                  <Col sm={7} xs={9}>
                    <strong className={styles.product_name}>
                      {item?.product}
                    </strong>

                    <div>
                      {
                        item?.categories?.map(
                          (category, index) =>
                            <Badge 
                              key={index}
                              variant="primary ml-1" 
                              className={styles.primary_badge}
                            >
                              {category}
                            </Badge>
                        )
                      }
                    </div>
                  </Col>

                  <Col sm={2} xs={3} className="text-center">
                    <strong className={styles.price}>
                      {item?.payed_price}
                    </strong>
                  </Col>
                </Row>
              </div>
            )
          )
        }        
      </BlueBackground>

      <Row className="mt-4 mb-4">
        <Col>
          <StyledButton
            action={"Acessar meus Games"}
            icon={faGamepad}
            type_button="blue"
            className={`${styles.button_blue_text} float-right`} /*concatenação de estilos*/
          />
        </Col>
      </Row>
    </MainComponent>
  )
}

export default withAuth(PaymentConfirmation);