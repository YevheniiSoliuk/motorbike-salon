export enum ModelPart {
  Color = 'color',
  Material = 'material',
}

export enum ModelTexture {
  Normal = 'normalTexture',
  Occlusion = 'occlusionTexture',
  Emissive = 'emissiveTexture',
  BaseColor = 'baseColorTexture',
  MetallicRoughness = 'metallicRoughnessTexture',
}

type Addition = {
  id: number;
  uuid: string;
  name: string;
  price: number;
  products: ProductAddition[];
};

type Model = {
  id: number;
  name: string;
  url: string;
  products: ProductModel[];
};

type Category = {
  id: number;
  name: string;
  subcategory: Category[];
  parentCategory: Category;
};

type Discount = {
  id: number;
  name: string;
  amount: number;
  fromDate: Date;
  toDate: Date;
};

type Image = {
  id: number;
  name: string;
  url: string;
};

type Guaranty = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: Image;
  period: string;
  duration: number;
};

type Product = {
  id: number;
  uuid: string;
  name: string;
  description: string;
  price: number;
  catalogNumber: string;
  category: Category;
  discount: Discount;
  models: ProductModel[];
  guaranties: ProductGuaranty[];
};

type ProductGuaranty = {
  id: number;
  name: string;
  product: Product;
  guaranty: Guaranty;
};

type ProductAddition = {
  id: number;
  name: string;
  modelMaterialIndex: number;
  modelPartType: ModelPart;
  modelTextureType: ModelTexture;
  rgba: [number, number, number, number];
  isDefault: boolean;
  productModel: ProductModel;
  addition: Addition;
};

export type ProductModel = {
  id: number;
  name: string;
  product: Product;
  model: Model;
  additions: ProductAddition[];
};
