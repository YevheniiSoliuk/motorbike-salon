import { useEffect, useState } from 'react';
import SubMenu from './SubMenu';
import Price from './Price';
import Photo from './Photo';
import Summary from '../Summary';
import App from '../App';
import { Link, useHistory, useParams } from 'react-router-dom';
import {
  Route,
  Switch,
  HashRouter,
  BrowserRouter as Router,
} from 'react-router-dom';
import '../Sass/Product.scss';
import Model from './Model';
import {
  AdditionAddition,
  Product,
  ProductAddition,
  fetchProductById,
} from '../api/products';
import { AxiosResponse } from 'axios';
import axios from 'axios';
import { access } from 'fs';
import { createConfiguration } from '../api/configurations';

// interface TestProps {
//   order?: {
//     id: string;
//     photo: string;
//     model: string;
//     price: string;
//     description: Object;
//   };
// }

const Dropdown: React.FC = () => {
  const params = useParams<{ productId: string }>();
  const history = useHistory();
  const [firstMenu, setFirstMenu] = useState<boolean>(true);
  const [secondMenu, setSecondMenu] = useState<boolean>(true);
  const [thirdMenu, setThirdMenu] = useState<boolean>(true);

  const [firstMenuPrice, setFirstMenuPrice] = useState(0);
  const [secondMenuPrice, setSecondPrice] = useState(0);
  const [photo, setPhoto] = useState([0, 0, 0.1, 1, 1]);
  const [option1, setOption1] = useState([0, 0.2, 0, 1]);
  const [color, setColor] = useState<ProductAddition | null>(null);
  const [material, setMaterial] = useState<ProductAddition | null>(null);

  const [clearFirstMenu, setClearFirstMenu] = useState(false);
  const [clearSecondMenu, setClearSecondMenu] = useState(false);

  const [orderPrice, setOrderPrice] = useState(0);
  const configurationSaveEndpoint = 'http://localhost:3001/configurations';
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
  const photoChange = (item: ProductAddition) => {
    switch (item.modelPartType) {
      case 'color':
        setColor(item);
        break;
      case 'material':
        setMaterial(item);
        break;
      default:
        break;
    }
    // if (photo !== undefined) {
    //   setPhoto(photo);
    // } else if (option1 !== undefined) {
    //   setPhoto(option1);
    // }
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
  const [addition, setAddition] = useState<string[]>([]);
  var additionStatic: any = [];

  const handleSendConfiguration = async () => {
    if (product === null) {
      return;
    }

    if (!color || !material) {
      return;
    }

    const userUuid = localStorage.getItem('uuid');

    if (!userUuid) {
      history.push('/login');
      return;
    }

    try {
      await createConfiguration({
        userUuid,
        productUuid: product.uuid,
        productAdditionsUUIDs: [color.uuid, material.uuid],
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    (async () => {
      const { data: product }: AxiosResponse<Product> = await fetchProductById(
        Number(params.productId),
      );
      setProduct(product);
      setColor(
        product.models[0].additions.find(
          (addition) =>
            addition.modelPartType === 'color' && addition.isDefault,
        ) ?? null,
      );
      setMaterial(
        product.models[0].additions.find(
          (addition) =>
            addition.modelPartType === 'material' && addition.isDefault,
        ) ?? null,
      );
    })();
  }, [params.productId]);

  return (
    <>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path={`/models/${params.productId}`}>
            <div className='titlePriceWrapper'>
              <h1 className='model-title'>{product?.name}</h1>

              <Price
                firstPrice={firstMenuPrice}
                secondPrice={secondMenuPrice}
                baseAmount={product?.price}
                orderPriceChange={handleOrderPriceChange}
              />
            </div>
            <Link to='/models' className='goBack'>
              <img src='/photos/more.png' alt='models' id='moreIcon' />
              <span>Modele</span>
            </Link>
            <div className='contentContainer'>
              <div className='imageWrapper'>
                {
                  <Model
                    modelUrl={product?.models[0].model.url ?? ''}
                    color={color}
                    selectedMaterial={material}
                    materials={
                      product
                        ? product?.models[0].additions.filter(
                            (addition) => addition.modelPartType === 'material',
                          )
                        : []
                    }
                  />
                }
              </div>
              <div className='configWrapper'>
                <div className='marginConfig'>
                  <div className='configContainer'>
                    <h2 className='configHeader'>Konfiguracja</h2>
                    <button
                      className='configSaveButton'
                      onClick={handleSendConfiguration}
                    >
                      Zapisz konfiguracje
                    </button>
                  </div>
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
                        content={
                          product?.models[0].additions
                            ? product?.models[0].additions.filter(
                                (addition) =>
                                  addition.modelPartType === 'color',
                              )
                            : []
                        }
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
                        content={
                          product?.models[0].additions
                            ? product?.models[0].additions.filter(
                                (addition) =>
                                  addition.modelPartType === 'material',
                              )
                            : []
                        }
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
                      <SubMenu content={product?.description} />
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
            <Summary order={product} price={orderPrice} />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
};
export default Dropdown;
