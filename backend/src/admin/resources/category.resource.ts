import Category from 'src/categories/entities/category.entity';
import { dataSource } from 'src/database/data-source';

export const CategoryResource = {
  resource: Category,
  options: {
    navigation: {
      icon: 'Tag',
    },
    listProperties: ['name', 'parentCategory'],
    showProperties: ['name', 'parentCategory'],
    filterProperties: ['name', 'parentCategoryId'],
    properties: {
      parentCategory: {
        type: 'string',
        isVisible: {
          edit: false,
        },
      },
      name: {
        isRequired: true,
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
  const category = await getFullCategory(params.id);

  if (!category.parentCategory) {
    params.parentCategory = 'N/A';
    return;
  }

  params.parentCategory = category.parentCategory.name;
}

async function validateForm(request, context) {
  const { ValidationError } = await import('adminjs');
  const { payload, method } = request;

  if (method !== 'post') return request;

  const { name } = payload;
  const errors: any = {};

  if (!name || !name.trim().length) {
    errors.name = {
      message: 'nameRequiredError',
    };
  } else if (!new RegExp(/^[a-zA-Z ]+$/, 'gi').test(name)) {
    errors.name = {
      message: 'Name must contain latin letters',
    };
  }

  if (Object.keys(errors).length) {
    throw new ValidationError(errors);
  }

  return request;
}

async function getFullCategory(categoryId: number) {
  return await dataSource.getRepository('category').findOne({
    relations: ['parentCategory'],
    where: { id: categoryId },
  });
}
