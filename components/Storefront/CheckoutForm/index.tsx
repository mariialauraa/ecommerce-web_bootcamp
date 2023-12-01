import { Col, Row, Form } from 'react-bootstrap';
import BlueBackground from '../../shared/BlueBackground';
import StyledButton from '../../shared/StyledButton';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';

import styles from './styles.module.css';
import MaskedInput from 'react-text-mask';

const CheckoutForm: React.FC = () => {

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();
  }

  //CPF (11 dígitos) ou CNPJ (14 dígitos) e possuem '.' '-' '/'
  const documentMask = (value) => {
    //CPF - o 'g' é global, para toda a cadeia de caractere
    // o 'i' para ignorar a caixa do texto, se é maiúsculo ou minúsculo
    // \D é tudo que não é dígito '.' '-' '/', ele substitui por nada ''
    if (value.replace(/\D/gi, '').length <= 11) {
      return [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    }
    //CNPJ
    return [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  }

  return (
    <Form onSubmit={handleSubmit}>
      <BlueBackground>
        <strong>CPF/CNPJ:</strong>
        <hr className={styles.line} />

        <MaskedInput 
          type="text" 
          className={`${styles.gray_input} w-100 mb-4`}
          placeholder="CPF/CNPJ"
          mask={documentMask}
          required //é um campo obrigatório
        />

        <strong>FORMAS DE PAGAMENTO</strong>

        <hr className={styles.line} />

        <div className={styles.payment}>
          <div>
            <input 
              type="radio" 
              className="mr-2" 
              name="payment-type" //serve para fazer a exclusão de seleção
            />
            <strong>Boleto</strong>
          </div>
          <Image 
            src="/assets/card-flags/boleto.png"
            alt="Boleto"
            className="rounded"
            width={30} height={20}
          />
        </div>

        <hr className={styles.line} />

        <div className={styles.payment}>
          <div>
            <input 
              type="radio" 
              className="mr-2" 
              name="payment-type" //seleciona apenas um, o outro fica desselecionado
            />
            <strong>Cartão de Crédito</strong>

            <small className="d-block">
              Até 12x sem juros no cartão
            </small>
          </div>

          <Image 
            src="/assets/card-flags/mastercard.png" 
            alt="Mastercard" 
            className="rounded" 
            width={30} height={20}
          />

          <Image 
            src="/assets/card-flags/visa.png" 
            alt="Visa" 
            className="rounded" 
            width={30} height={20}
          />
        </div>

        <div className="mt-4">
          <strong>Número do cartão</strong>

          <MaskedInput 
            type="text" 
            placeholder="XXXX XXXX XXXX XXXX" 
            className={styles.gray_input} 
            mask={[
              /\d/, /\d/, /\d/, /\d/, ' ',
              /\d/, /\d/, /\d/, /\d/, ' ',
              /\d/, /\d/, /\d/, /\d/, ' ',
              /\d/, /\d/, /\d/, /\d/
            ]}     
          />
        </div>

        <div className="mt-3">
          <Row>
            <Col xs={8}>
              <strong>Data de Validade</strong>

              <Row>
                <Col>
                  <select 
                    className={styles.gray_select}
                  >
                    <option value="">Mês</option>
                    <option>Dezembro</option>
                    <option>Janeiro</option>
                    <option>Fevereiro</option>
                  </select>
                </Col>

                <Col>
                  <select 
                    className={styles.gray_select}
                  >
                    <option value="">Ano</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                  </select>
                </Col>
              </Row>
            </Col>

            <Col xs={4}>
              <strong>Código</strong>
              <MaskedInput 
                type="text" 
                placeholder="XXX" 
                className={`${styles.gray_input} w-100`} //para ocupar toda largura disponível
                mask={[/\d/, /\d/, /\d/]}
              />
            </Col>
          </Row>

          <div className="mt-4">
            <strong>Nome do Cartão</strong>
            <input 
              type="text" 
              placeholder="NOME DO CARTÃO" 
              className={`${styles.gray_input} w-100`} 
            />
          </div>

          <div className="mt-4">
            <strong>Parcelas</strong>
            <select 
              className={styles.gray_select} 
            >
              <option value="">Selecione</option>
              <option>1x 188.82 (188.82)</option>
            </select>
          </div>
        </div>

        <div className="mt-4">
          <strong>Endereço de cobrança</strong>

          <hr className={styles.line} />

          <div className="mt-2">
            <strong>Logradouro</strong>
            <input 
              type="text" 
              placeholder="Logradouro" 
              className={`${styles.gray_input} w-100`} 
            />
          </div>

          <Row className="mt-4">
            <Col>
              <strong>Número</strong>
              <input 
                type="text" 
                placeholder="Número" 
                className={`${styles.gray_input} w-100`} 
              />
            </Col>

            <Col>
              <strong>Cidade</strong>
              <input 
                type="text" 
                placeholder="Cidade" 
                className={`${styles.gray_input} w-100`} 
              />
            </Col>
          </Row>

          <Row className="mt-4">
            <Col>
              <strong>Estado</strong>
              <MaskedInput
                type="text" 
                placeholder="Estado" 
                className={`${styles.gray_input} w-100`} 
                mask={[/[A-Z]/, /[A-Z]/]}
              />
            </Col>

            <Col>
              <strong>CEP</strong>
              <MaskedInput 
                type="text" 
                placeholder="00000-000" 
                className={`${styles.gray_input} w-100`} 
                mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
              />
            </Col>
          </Row>

        </div>
      </BlueBackground>

      <div className="mt-3" />

      <BlueBackground>
        <div>
          <strong>VALOR TOTAL</strong>
          <strong className="float-right">
            R$ 188.82
          </strong>
        </div>

        <hr className={styles.line} />

        <StyledButton
          type="submit"
          action="Finalizar Pedido"
          icon={faCartPlus}
          type_button="red"
          className="btn btn-danger w-100"
        />
      </BlueBackground>
    </Form>
  );
}

export default CheckoutForm;