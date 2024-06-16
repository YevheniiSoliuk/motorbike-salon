import ProductAddition from 'src/products/product-addition/product-addition.entity';
import { productsNavigation } from '../constants';
import { dataSource } from 'src/database/data-source';

export const ProductAdditionResource = (
  select: string,
  colorPicker: string,
) => ({
  resource: ProductAddition,
  options: {
    navigation: productsNavigation,
    listProperties: ['name', 'productModel', 'addition', 'isDefault'],
    showProperties: [
      'name',
      'productModel',
      'addition',
      'modelMaterial',
      'modelTextureType',
      'modelPartType',
      'rgba',
      'isDefault',
    ],
    editProperties: [
      'name',
      'productModel.id',
      'addition.id',
      'modelMaterial',
      'modelPartType',
      'modelTextureType',
      'rgba',
      'isDefault',
    ],
    filterProperties: [
      'name',
      'modelPartType',
      'modelTextureType',
      'isDefault',
      'productModel',
      'addition',
    ],
    properties: {
      productModel: {
        type: 'string',
        isVisible: {
          edit: false,
        },
      },
      addition: {
        type: 'string',
        isVisible: {
          edit: false,
        },
      },
      modelMaterial: {
        components: {
          edit: select,
          new: select,
        },
      },
      rgba: {
        components: {
          edit: colorPicker,
          new: colorPicker,
        },
      },
    },
    actions: {
      list: {
        after: [afterShowList],
      },
      show: {
        after: [afterShowDetails],
      },
      new: {
        before: [validateForm],
      },
      edit: {
        before: [validateForm],
        after: [afterFormShowing],
      },
    },
  },
});

async function afterShowList(res) {
  const { records } = res;

  for (const record of records) {
    const { params } = record;
    await formatRecord(params);
    record.params = params;
  }

  return res;
}

async function afterShowDetails(res) {
  const { params } = res.record;
  await formatRecord(params);
  res.record.params = params;

  return res;
}

async function formatRecord(params) {
  const productAddition = await getFullProductAddition(params.id);

  if (!productAddition.productModel) {
    params.productModel = 'N/A';
  } else {
    params.productModel = productAddition.productModel.name;
  }

  if (!productAddition.addition) {
    params.addition = 'N/A';
  } else {
    params.addition = productAddition.addition.name;
  }
}

async function afterFormShowing(res) {
  const params = res.record.params;
  const productAddition = await getFullProductAddition(params.id);

  params['productModel.id'] = productAddition.productModel.id;
  params['addition.id'] = productAddition.addition.id;

  return res;
}

async function validateForm(request, context) {
  const { ValidationError } = await import('adminjs');
  const { payload, method } = request;

  if (method !== 'post') return request;
  const { name, modelMaterialIndex, isDefault } = payload;
  const errors: any = {};

  if (!name || !name.trim().length) {
    errors.name = {
      message: 'Name is required',
    };
  } else if (!new RegExp(/^[a-zA-Z0-9 -_]+$/, 'gi').test(name)) {
    errors.name = {
      message: 'Name must contain latin letters',
    };
  }

  if (!modelMaterialIndex) {
    errors.modelMaterialIndex = {
      message: 'Model material is required',
    };
  }

  if (isDefault) {
    payload['rgba.3'] = 1;
  }

  if (!payload['productModel.id']) {
    errors['productModel.id'] = {
      message: 'Product model is required',
    };
  }

  if (!payload['addition.id']) {
    errors['addition.id'] = {
      message: 'Addition is required',
    };
  }

  if (Object.keys(errors).length) {
    throw new ValidationError(errors);
  }

  return request;
}

async function getFullProductAddition(productAdditionId: number) {
  return await dataSource.getRepository('product_addition').findOne({
    relations: ['productModel', 'addition'],
    where: {
      id: productAdditionId,
    },
  });
}
