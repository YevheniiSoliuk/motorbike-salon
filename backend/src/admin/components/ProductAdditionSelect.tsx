import React, { useState, useEffect } from 'react';
import ProductAddition from 'src/products/product-addition/product-addition.entity';
import Select from './Select';
import { AxiosResponse } from 'axios';
import { getConfigurationById } from '../api';
import Configuration from 'src/configurations/entities/configuration.entity';

const ProductAdditionSelect = (props) => {
  const [productAdditions, setProductAdditions] = useState<ProductAddition[]>(
    [],
  );
  const [selectedProductAddition, setSelectedProductAddition] =
    useState<ProductAddition | null>(null);
  const [isProductAdditionLoads, setIsProductAdditionLoads] = useState(false);

  useEffect(() => {
    if (!props.record.params['configuration.id']) {
      return;
    }

    (async () => {
      setIsProductAdditionLoads(true);
      const { data: configuration }: AxiosResponse<Configuration> =
        await getConfigurationById(props.record.params['configuration.id']);

      setProductAdditions(configuration.product.models[2].additions);
      setIsProductAdditionLoads(false);
    })();
  }, [props]);

  const onProductAdditionSelect = (productAddition: ProductAddition) => {
    setSelectedProductAddition(productAddition);
    props.record.params['productAddition.id'] = productAddition.id;
  };

  return (
    <Select<ProductAddition, 5>
      values={productAdditions}
      value={selectedProductAddition}
      setValue={onProductAdditionSelect}
      fields={['name']}
      required={false}
      placeholder={''}
      label={'Product Addition'}
      isLoading={isProductAdditionLoads}
      error={props.record.errors['productAddition.id']?.message ?? ''}
      hasError={!!props.record.errors['productAddition.id']}
    />
  );
};

export default ProductAdditionSelect;
