interface BaseResponse {
  success: boolean;
  message: string | null;
  errorCode: unknown;
  data: unknown;
}

interface ProductData {
  productDescription: string | null;
  productMainImage: string | null;
  productImages: string[];
  productInfo: string | null;
}

interface ProductRequire {
  productRequireID: number | null;
  identifier: string | null;
  title: string | null;
  type: string | null;
  min_length: unknown;
  max_length: unknown;
  placeholder: string | null;
  default_value: string | null;
  class: string | null;
  image_url: string | null;
  alerts: string | null;
  attribute: string[];
  options: string[];
  checker: string | null;
}

interface ProductAgeList {
  usk: unknown;
  esrb: unknown;
  pegi: unknown;
}

type ProductStatus = 0 | 1; // 0: Passive 1: Active

export interface ProductsList {
  productID: number;
  customerStoreProductID: number;
  productCategoryID: number | null;
  productTypeID: number | null;
  productBrandID: number | null;
  productName: string | null;
  productSlug: string | null;
  productStockID: number | null;
  productData: ProductData;
  productRequire: ProductRequire[];
  purchaseRequire: unknown;
  platformList: unknown;
  regionList: unknown;
  ageList: ProductAgeList;
  marketPrice: number | null;
  buyPrice: number | null;
  salePrice: number | null;
  saleMinCount: number | null;
  saleMaxCount: number | null;
  buyMinCount: number | null;
  buyMaxCount: number | null;
  buyStartHour: number | null;
  buyEndHour: number | null;
  saleStartHour: number | null;
  saleEndHour: number | null;
  totalStock: number;
  sorting: number | null;
  status: ProductStatus;
}

export interface ProductsListResponse extends BaseResponse {
  data: ProductsList[];
}

export interface ProductsListRequest {
  page: number | undefined;
  pageSize: number | undefined;
  productCategoryID: number | undefined;
}
