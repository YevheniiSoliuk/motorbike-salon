import { useEffect, useState } from 'react';
import SubMenu from './SubMenu';
import Price from './Price';
import Photo from './Photo';
import Summary from '../Summary';
import App from '../App';
import { Link } from 'react-router-dom';
import {
  Route,
  Switch,
  HashRouter,
  BrowserRouter as Router,
} from 'react-router-dom';
import '../Sass/Product.scss';
import Model from './Model';
import { Product, fetchProductById } from '../api/products';

interface TestProps {
  order?: {
    id: string;
    photo: string;
    model: string;
    price: string;
    description: Object;
  };
}

const Dropdown: React.FC<TestProps> = ({ order }: any) => {
  const [firstMenu, setFirstMenu] = useState<boolean>(true);
  const [secondMenu, setSecondMenu] = useState<boolean>(true);
  const [thirdMenu, setThirdMenu] = useState<boolean>(true);

  const [firstMenuPrice, setFirstMenuPrice] = useState(0);
  const [secondMenuPrice, setSecondPrice] = useState(0);
  const [photo, setPhoto] = useState(order.description[0].color[0].photo);
  const [option1, setOption1] = useState(order.description[0].color[0].option1);

  const [clearFirstMenu, setClearFirstMenu] = useState(false);
  const [clearSecondMenu, setClearSecondMenu] = useState(false);

  const [orderPrice, setOrderPrice] = useState(0);

  const handleOrderPriceChange = (price: number) => {
    setOrderPrice(price);
  };
  const toggle = (index: number) => {
    if (index === 1) {
      setFirstMenu((prev) => !prev);
    } else if (index === 2) {
      setSecondMenu((prev) => !prev);
    } else if (index === 3) {
      setThirdMenu((prev) => !prev);
    }
  };
  const handleFirstMenuPriceChange = (price: number) => {
    setFirstMenuPrice(price);
  };
  const handleSecondMenuPriceChange = (price: number) => {
    setSecondPrice(price);
  };
  const photoChange = (photo: any) => {
    if (photo !== undefined) {
      setPhoto(photo);
    } else if (option1 !== undefined) {
      setPhoto(option1);
    }
  };
  const handleClearFirstSelectedOptions = () => {
    setClearFirstMenu(true);
    setFirstMenuPrice(0);
  };
  const handleClearSecondSelectedOptions = () => {
    setClearSecondMenu(true);
    setSecondPrice(0);
  };
  const handleClearFirstMenu = (flag: any) => {
    setClearFirstMenu(flag);
  };
  const handleClearSecondMenu = (flag: any) => {
    setClearSecondMenu(flag);
  };

  const [product, setProduct] = useState<Product | null>(null);
  useEffect(() => {
    (async () => {
      const { data: product } = await fetchProductById(5);
      setProduct(product);
    })();
  }, []);

  return (
    <>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path={'/' + order.model}>
            <div className='titlePriceWrapper'>
              <h1 className='model-title'>{order.model}</h1>

              <Price
                firstPrice={firstMenuPrice}
                secondPrice={secondMenuPrice}
                baseAmount={order.price}
                orderPriceChange={handleOrderPriceChange}
              />
            </div>
            <Link to='/models' className='goBack'>
              <img src='/photos/more.png' alt='models' id='moreIcon' />
              <span>Modele</span>
            </Link>
            <div className='contentContainer'>
              <div className='imageWrapper'>
                {/* {<Photo photo={photo} model={'/assets/scene.glb'} />} */}
                {
                  <Model
                    modelUrl={
                      product?.models[1].model.url ?? '/assets/motor.glb'
                    }
                    color={photo}
                    option1={option1}
                  />
                }
              </div>
              <div className='configWrapper'>
                <div className='marginConfig'>
                  <h2 className='configHeader'>Konfiguracja</h2>
                  <hr className='headerLine' />
                  <div className='headerContainer'>
                    <h3 onClick={() => toggle(2)}>Kolory</h3>
                    <span
                      className='clearConfig'
                      onClick={handleClearFirstSelectedOptions}
                    >
                      Wyczyść
                    </span>
                  </div>
                  <hr className='miniHeaderLine' />
                  <div className='dropdownWrapper'>
                    {secondMenu ? (
                      <SubMenu
                        price={handleFirstMenuPriceChange}
                        photoChange={photoChange}
                        content={order.description[0].color}
                        clearedFunction={handleClearFirstMenu}
                        cleared={clearFirstMenu}
                      />
                    ) : null}
                  </div>
                  <div className='headerContainer'>
                    <h3 onClick={() => toggle(3)}>Dodatkowe opcje</h3>
                    <span
                      className='clearConfig'
                      onClick={handleClearSecondSelectedOptions}
                    >
                      Wyczyść
                    </span>
                  </div>
                  <hr className='miniHeaderLine' />
                  <div className='dropdownWrapper'>
                    {thirdMenu ? (
                      <SubMenu
                        price={handleSecondMenuPriceChange}
                        photoChange={photoChange}
                        content={order.description[0].additions}
                        clearedFunction={handleClearSecondMenu}
                        cleared={clearSecondMenu}
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            <div id='dropdownContainer'>
              <h3 onClick={() => toggle(1)}>Opis</h3>
              <hr className='headerLine' />
              <div className='flexButton'>
                <div className='dropdownWrapper'>
                  <p className='model-description'>
                    {firstMenu ? (
                      <SubMenu content={order.description[0].description} />
                    ) : null}
                  </p>
                </div>
                <Link to='/summary' className='goSummary'>
                  <button className='button-66'>Idź do podsumowania</button>
                </Link>
              </div>
            </div>
          </Route>

          <Route exact path={'/models'}>
            <App />
          </Route>
          <Route exact path={'/summary'}>
            <Summary order={order} price={orderPrice} />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
};
export default Dropdown;
