import { Button } from 'react-bootstrap';
import styles from './styles.module.css';
import ProductHome from '../../../dtos/ProductHome';

import { useRouter } from 'next/router';

interface HighlitedButtonProps {
  type?: string;
  product: ProductHome;
}

/* botão por padrão é do tipo 'normal' */
const ProductInfo: React.FC<HighlitedButtonProps> = ({ type = 'normal', product }) => {
  const router = useRouter();

  return (
    <div className={styles.product}>
      <div>
        <img 
          src={product.image_url} 
          alt={product.name}
          className={styles.image}
        />
      </div>

      <div className={styles.product_details}>
        <div>
          <p>
            {product.name}
          </p>
          <p>
            {product.description}
          </p>
        </div>

        <div className={styles.button}>
          <Button
            /* botão em destaque se não(:) botão normal */
            className={
              `${(type === 'highlighted' ? 'btn btn-info' : styles.normal_button)}`
            }
            onClick={() => router.push(`/Product/${product.id}`)}
          >
            {`R$ ${product.price}`}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo;