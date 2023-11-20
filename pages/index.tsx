import MainComponent from '../components/shared/MainComponent';

import HightlightedProduct from '../components/Storefront/HighlightedProducts'

const Home: React.FC = () => {
  return (
    <MainComponent>
      <h1>Home</h1>
      <HightlightedProduct title="Promoção"/>
      <HightlightedProduct title="Em destaque" type="highlighted"/>
    </MainComponent>
  )
}

export default Home;