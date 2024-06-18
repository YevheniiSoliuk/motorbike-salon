import React, { useEffect, useMemo, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Configuration, getUserConfigurations } from './api/configurations';
import { AxiosResponse } from 'axios';
import { format } from 'date-fns';
import './Sass/Dashboard.scss';

const Dashboard = () => {
  const history = useHistory();
  const [configurations, setConfigurations] = useState<Configuration[]>([]);

  useEffect(() => {
    (async () => {
      const userUuid = localStorage.getItem('uuid');

      if (!userUuid) {
        history.replace('/login');
        return;
      }

      const { data }: AxiosResponse<Configuration[]> =
        await getUserConfigurations(userUuid);
      setConfigurations(data);
    })();
  }, [history]);

  const configurationsRows = useMemo(() => {
    if (!configurations.length) {
      return (
        <div className='.no-info-container'>
          <h3>No configurations available</h3>
          <span>We couldn't find any created configurations for you.</span>{' '}
          <Link to='/models'>Let's create one</Link>
        </div>
      );
    }

    return configurations.map((configuration, index) => {
      const additionsPrice = configuration.product.models[0].additions.reduce(
        (acc, val) => (acc += val.addition.price),
        0,
      );
      const totalPrice = configuration.product.price + additionsPrice;

      return (
        <tr>
          <td>
            <div
              className={
                index === configurations.length - 1
                  ? 'ui-tr-last-td-first'
                  : 'ui-td'
              }
            >
              {index + 1}
            </div>
          </td>
          <td>
            <div className='ui-td'>{configuration.name}</div>
          </td>
          <td>
            <div className='ui-td'>
              {format(new Date(configuration.createdAt), 'dd/MM/yyyy')}
            </div>
          </td>
          <td>
            <div className='ui-td'>
              {format(new Date(configuration.updatedAt), 'dd/MM/yyyy')}
            </div>
          </td>
          <td>
            <div
              className={
                index === configurations.length - 1
                  ? 'ui-tr-last-td-last'
                  : 'ui-td'
              }
            >{`${totalPrice} PLN`}</div>
          </td>
        </tr>
      );
    });
  }, [configurations]);

  return (
    <div className='page-container'>
      <Link to='/models' className='goBack' style={{ marginLeft: '24px' }}>
        <img src='/photos/more.png' alt='models' id='moreIcon' />
        <span>Modele</span>
      </Link>
      <h2>Configurations</h2>
      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th>
                <div className='ui-th ui-tr-first-td-first'>#</div>
              </th>
              <th>
                <div className='ui-th'>Configuration Name</div>
              </th>
              <th>
                <div className='ui-th'>Created At</div>
              </th>
              <th>
                <div className='ui-th'>Updatet At</div>
              </th>
              <th>
                <div className='ui-th ui-tr-first-td-last'>Total Price</div>
              </th>
            </tr>
          </thead>
          <tbody>{configurationsRows}</tbody>
        </table>
      </div>
    </div>
  );
};
export default Dashboard;
