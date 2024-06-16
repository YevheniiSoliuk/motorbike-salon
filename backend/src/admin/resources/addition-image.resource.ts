import AdditionImage from 'src/images/addition-image/addition-image.entity';
import { additionsNavigation } from '../constants';
import { dataSource } from 'src/database/data-source';

export const AdditionImageResource = {
  resource: AdditionImage,
  options: {
    navigation: additionsNavigation,
    listProperties: ['name', 'image', 'addition'],
    showProperties: ['name', 'image', 'addition'],
    filterProperties: ['name', 'image', 'addition'],
    properties: {
      image: {
        isVisible: {
          edit: false,
        },
      },
      addition: {
        isVisible: {
          edit: false,
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
      },
    },
  },
};

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
  const additionImage = await getFullAdditionImage(params.id);

  params.price = `${params.price} PLN`;

  if (!additionImage.addition) {
    params.addition = 'N/A';
  } else {
    params.addition = additionImage.addition.name;
  }

  if (!additionImage.image) {
    params.image = 'N/A';
  } else {
    params.image = additionImage.image.name;
  }
}

async function validateForm(request, context) {
  const { ValidationError } = await import('adminjs');
  const { payload, method } = request;

  if (method !== 'post') return request;
  const { name } = payload;
  const errors: any = {};

  if (!name || !name.trim().length) {
    errors.name = {
      message: 'Name is required',
    };
  } else if (!new RegExp(/^[a-z0-9 ,.'-]+$/, 'gi').test(name)) {
    errors.name = {
      message: 'Name must contain latin letters',
    };
  }

  if (!payload['addition.id']) {
    errors['addition.id'] = {
      message: 'Addition is required',
    };
  }

  if (!payload['image.id']) {
    errors['image.id'] = {
      message: 'Image is required',
    };
  }

  if (Object.keys(errors).length) {
    throw new ValidationError(errors);
  }

  return request;
}

async function getFullAdditionImage(imageId: number) {
  return await dataSource.getRepository('addition_image').findOne({
    relations: ['addition', 'image'],
    where: {
      id: imageId,
    },
  });
}
