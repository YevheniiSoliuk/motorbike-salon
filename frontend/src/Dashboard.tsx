import React, { useEffect, useMemo, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Configuration, getUserConfigurations } from './api/configurations';
import { AxiosResponse } from 'axios';
import { format } from 'date-fns';

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
        <div>
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
          <td>{index + 1}</td>
          <td>{configuration.name}</td>
          <td>{format(new Date(configuration.createdAt), 'dd/MM/yyyy')}</td>
          <td>{format(new Date(configuration.updatedAt), 'dd/MM/yyyy')}</td>
          <td>{`${totalPrice} PLN`}</td>
        </tr>
      );
    });
  }, [configurations]);

  return (
    <div>
      <h2>Configurations</h2>
      <table>
        <thead>
          <th>
            <td>#</td>
            <td>Configuration Name</td>
            <td>Created At</td>
            <td>Updatet At</td>
            <td>Total Price</td>
          </th>
        </thead>
        <tbody>{configurationsRows}</tbody>
      </table>
    </div>
  );
};
export default Dashboard;
