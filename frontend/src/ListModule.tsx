import { Link } from 'react-router-dom';
import './Sass/ListModule.scss';

import { useEffect, useState } from 'react';
import { Product, fetchProducts } from './api/products';

const ListModule = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const { data: products } = await fetchProducts();
      setProducts(products);
    })();
  }, []);

  const models = products.map((item) => {
    return (
      <li key={item.id}>
        <Link to={`/models/${item.id}`}>
          <img
            src={item.images.length ? item.images[0].image.url : ''}
            alt={
              item.images.length ? item.images[0].name : 'Product placeholder'
            }
            className='photo'
          />
          <br />
          {item.name}
        </Link>
      </li>
    );
  });
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 205px)',
        margin: 'auto auto 0',
      }}
    >
      {models.length ? models : <h1>No products</h1>}
    </div>
  );
};

export default ListModule;
