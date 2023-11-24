import { useSelector } from 'react-redux'; //ter acesso aos dados do usuário
import { useRouter } from 'next/router';
import Cookie from 'js-cookie'; //ter acesso aos dados da 'api'

import AuthState from '../../dtos/AuthState';
import User from '../../dtos/User';
import ApiData from '../../dtos/ApiData';

const withAuth = (Component) => {
  const Auth = (props) => {
    const router = useRouter();
    // pega o usuário do 'redux'
    const loggedUser: User = useSelector((state: AuthState) => state.auth.loggedUser);

    //cria a variável 'apiDataCookie' para evitar o erro, caso 'Cookie.get('@api-data')' não exista
    const apiDataCookie = Cookie.get('@api-data');
    const apiData: ApiData = apiDataCookie ? JSON.parse(apiDataCookie) : null;

    //verfica se o 'login' foi preenchido, se não, retorna o usuário para tela de 'login'
    if (!loggedUser ||
        !apiData ||
        !apiData['access-token'] ||
        apiData['access-token'] === ''
      ) {
        router.push({
          pathname: '/Auth/Login',
          query: {
            //este parametro redireciona o usuário devolta p/ mesma rota q ele estava antes do 'login'
            callback: router.pathname
          }
        });
      }

      return <Component {...props}/>;
  }

  if (Component.getServerSideProps) {
    Auth.getServerSideProps = Component.getServerSideProps;
  }

  return Auth;
}

export default withAuth;