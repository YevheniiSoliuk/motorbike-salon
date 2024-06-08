import './Sass/Summary.scss';
import { Link } from 'react-router-dom';

const Summary = ({ order, price }: any) => {
  if (order !== undefined && price !== undefined) {
    sessionStorage.setItem('order', JSON.stringify(order));
    sessionStorage.setItem('price', JSON.stringify(price));
  }

  const orderText = JSON.parse(sessionStorage.getItem('order') || '{}');
  const orderPrice = JSON.parse(sessionStorage.getItem('price') || '{}');

  var photoName = orderText.photo;
  var colorActivePrice = 0;
  var additionActivePrice = 0;
  console.log(orderText);

  const handleDisplayOrderPhoto = () => {
    // for (var i = 0; i < orderText.description[0].color.length; i++) {
    //   if (orderText.description[0].color[i].active === true) {
    //     photoName = orderText.description[0].color[i].photo;
    //     colorActivePrice = orderText.description[0].color[i].price;
    //   }
    //   if (orderText.description[0].additions[i].active === true) {
    //     additionActivePrice = orderText.description[0].additions[i].price;
    //   }
    // }
  };

  handleDisplayOrderPhoto();

  return (
    <div className='flexWrapperContainer'>
      <div className='flexWrapper'>
        <li key={1} className='orderContainer'>
          <img src={photoName} alt='motorcycle' className='photo' />
          <br />

          <br />
        </li>
        <div className='orderDescription'>
          <h1>{orderText.model}</h1>
          <span className='summaryHeader bold'>
            Cena całkowita
            <br />
            <span className='summaryHeader bold'>{orderPrice + ' zł'}</span>
          </span>
          <div className='buttonsWrapper'>
            <Link to='/models'>
              <button className='button-black'>Katalog</button>
            </Link>
            <a href={photoName} className='b-white button-black'>
              Pobierz zdjęcie
            </a>
          </div>
        </div>
      </div>
      <div className='summaryContainer'>
        <h3>Podsumowanie</h3>

        <div className='summaryOption'>
          <h5>Model</h5>
          <span className='summaryOptionPrice'>{orderText.price + ' zł'}</span>
        </div>
        <div className='verticalLine'></div>
        <div className='summaryOption'>
          <h5>Kolor</h5>
          <span className='summaryOptionPrice'>{colorActivePrice + ' zł'}</span>
        </div>
        <div className='verticalLine'></div>
        <div className='summaryOption'>
          <h5>Wyposażenie dodatkowe</h5>
          <span className='summaryOptionPrice'>
            {additionActivePrice + ' zł'}
          </span>
        </div>
        <div className='verticalLine'></div>

        <h4>Cena całkowita</h4>

        <span className='summaryOptionPriceBold bold'>
          {orderPrice + ' zł'}
        </span>
      </div>
    </div>
  );
};

export default Summary;
