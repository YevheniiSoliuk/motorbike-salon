import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from './Table';
import {
  UILinkSpan,
  UIP,
  UITd,
  UITdFirst,
  UITdLast,
  UITh,
  UIThFirst,
  UIThLast,
  UITrLastTdFirst,
  UITrLastTdLast,
} from './styles';
import { getConfigurationAdditionsById } from '../api';
import { AxiosResponse } from 'axios';
import ConfigurationAddition from 'src/configurations/configuration-addition/configuration-addition.entity';

const ConfigurationProductAdditionsTable = (props) => {
  const navigate = useNavigate();
  const [configurationAdditions, setConfigurationAdditions] = useState<
    ConfigurationAddition[]
  >([]);
  // const [isProductAdditionLoads, setIsProductAdditionLoads] = useState(false);

  useEffect(() => {
    if (!props.record.params.id) {
      return;
    }

    (async () => {
      // setIsProductAdditionLoads(true);

      const {
        data: configurationAdditions,
      }: AxiosResponse<ConfigurationAddition[]> =
        await getConfigurationAdditionsById(props.record.params.id);

      setConfigurationAdditions(configurationAdditions);
      // setIsProductAdditionLoads(false);
    })();
  }, [props]);

  const tableColumns = useMemo(() => {
    return (
      <tr>
        <th>
          <UIThFirst>#</UIThFirst>
        </th>
        <th>
          <UITh>Name</UITh>
        </th>
        <th>
          <UIThLast>Price</UIThLast>
        </th>
      </tr>
    );
  }, []);

  const tableRows = useMemo(() => {
    return configurationAdditions.map((configurationAddition, index) => {
      if (index === configurationAdditions.length - 1) {
        return (
          <tr key={configurationAddition.id}>
            <td>
              <UITrLastTdFirst>{index + 1}</UITrLastTdFirst>
            </td>
            <td>
              <UITd>{configurationAddition.productAddition.name}</UITd>
            </td>
            <td>
              <UITrLastTdLast>
                {configurationAddition.productAddition.addition.price} PLN
              </UITrLastTdLast>
            </td>
          </tr>
        );
      } else {
        return (
          <tr key={configurationAddition.id}>
            <td>
              <UITdFirst>{index + 1}</UITdFirst>
            </td>
            <td>
              <UITd>{configurationAddition.productAddition.name}</UITd>
            </td>
            <td>
              <UITdLast>
                {configurationAddition.productAddition.addition.price} PLN
              </UITdLast>
            </td>
          </tr>
        );
      }
    });
  }, [configurationAdditions]);

  return (
    <Table
      columns={tableColumns}
      rows={tableRows}
      noDataTitle={'Product additions table is empty'}
      noDataSubtitle={
        <UIP>
          Add product additions to configuration in{' '}
          <UILinkSpan
            onClick={() => navigate('/admin/resources/ConfigurationAddition')}
          >
            Configuration Addition
          </UILinkSpan>{' '}
          section to see data in table
        </UIP>
      }
      label={'Product Additions'}
    />
  );
};

export default ConfigurationProductAdditionsTable;
