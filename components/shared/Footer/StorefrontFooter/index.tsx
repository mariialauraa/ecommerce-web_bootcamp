import styles from './styles.module.css';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Logo from '../../Logo';
import Image from 'next/image';

{/* importação do Link para redirecionarmos o usuário para as mídias sociais e site do onebitcode */}
import Link from 'next/link';

const StorefrontFooter: React.FC = () => {
  return (
    <footer className={styles.background}>
      <Col md={{ span: 8, offset: 2 }}>
        <Row>
          <Col lg={7} md={12}>
            <Row>
              <Col lg={5} md={12} className="mb-4 mb-lg-0">
                Acompanhe-nos
              </Col>

              {/* adicionando classe social_medias e link para o facebook */}
              <Col lg={7} md={12} className="mb-4 mb-lg-0">
                <Row className={styles.social_medias}>
                  <Col lg={1} xs={2}>
                    <Link href="https://www.facebook.com/onebitcode/">
                      {/* abre uma nova aba */}
                      <a target="_blank">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                    </Link>
                  </Col>

                  {/* adicionando link para o instragram */}
                  <Col lg={1} xs={2}>
                    <Link href="https://www.instagram.com/onebitcode/">
                      <a target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </Link>
                  </Col>

                  {/* adicionando link para o youtube */}
                  <Col lg={1} xs={2}>
                    <Link href="https://www.youtube.com/onebitcode">
                      <a target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </Link>
                  </Col>

                  {/* adicionando link para o twitter */}
                  <Col lg={1} xs={2}>
                    <Link href="https://twitter.com/onebitcode">
                      <a target="_blank">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </Link>
                  </Col>

                  {/* adicionando link para o linkedin */}
                  <Col lg={1} xs={2}>
                    <Link href="https://www.linkedin.com/in/leonardo-scorza-onebitcode-7aba352b/">
                      <a target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>

          {/* adicionando link para o onebitcode  nos menus sem ícone*/}
          <Col lg={{ span: 4, offset: 0 }} xs={{ span: 8, offset: 2 }}>
            <Row>
              <Col>
                <Link href="https://www.onebitcode.com">
                  <a target="_blank">
                    Contato
                  </a>
                </Link>
              </Col>

              <Col>
                <Link href="https://www.onebitcode.com">
                  <a target="_blank">
                    Sobre
                  </a>
                </Link>
              </Col>

              <Col>
                <Link href="https://www.onebitcode.com">
                  <a target="_blank">
                    Blog
                  </a>
                </Link>
              </Col>

              <Col>
                <Link href="https://www.onebitcode.com">
                  <a target="_blank">
                    FAQ
                  </a>
                </Link>
              </Col>              
            </Row>
          </Col>
        </Row>
        <hr className={styles.line} />

        {/* adicionando classe logo para escondermos o logo no mobile */}
        <Row>
          <Col className={styles.logo} lg={{ span: 2, offset: 0 }} xs={{ span: 8, offset: 2 }}>
            <Logo />
          </Col>

          {/* centralizando os dados de contato */}
          <Col className="text-center" lg={{ span: 6, offset: 1 }} xs={12}>
            <p style={{ 'color': 'var(--color-gray-light)' }}>onebitcode.com • contato@onebitcode.com</p>
          </Col>

          {/* adicionando link para o onebitcode */}
          <Col lg={{ span: 2, offset: 1 }} xs={{ span: 6, offset: 3 }}>
            <Link href="https://www.onebitcode.com">
              <a target="_blank">
                <Image src="/assets/logo-bootcamp.png" alt="Logo Bootcamp" width={240} height={70} />
              </a>
            </Link>
          </Col>
        </Row>
      </Col>
    </footer>
  )
}
export default StorefrontFooter;