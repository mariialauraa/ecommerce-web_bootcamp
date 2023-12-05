import { Modal, Button, Col, Row, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';
import Game from '../../../dtos/Game';

interface ProductLicensesModalProps {
  show: boolean;
  onHide: () => void; //função do tipo 'void'
  selectedProduct?: Game;
}

const ProductLicensesModal: React.FC<ProductLicensesModalProps> = 
  ({ show, onHide, selectedProduct }) => {
  
    return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered //vai ser centrado
      dialogClassName={styles.modal} //para aplicar os nosso estilos  
    >
      
        <Modal.Header closeButton> 
          <Modal.Title >
            {selectedProduct?.name}
          </Modal.Title>
        </Modal.Header>        

      <Modal.Body>
        <Row>
          <Col>
            <strong>Chaves de Ativação</strong>
            {
              selectedProduct?.licenses.map(
                (license, index) => 
                  <InputGroup className="mb-2" key={index}>
                    <InputGroup.Prepend> {/*liga o 'input Text' com o 'icon faKey'*/}
                      <InputGroup.Text className={styles.key_input}>
                        <FontAwesomeIcon icon={faKey} />
                      </InputGroup.Text>
                    </InputGroup.Prepend>

                    <FormControl 
                      placeholder="Chave"
                      className={styles.key_input}
                      defaultValue={license} //não é obrigado a usar o 'onChange'
                      disabled
                    />
                  </InputGroup>
              )
            }
          </Col>
        </Row>
      </Modal.Body>
      
      <Modal.Footer>
        <Button variant="primary" onClick={onHide}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductLicensesModal;