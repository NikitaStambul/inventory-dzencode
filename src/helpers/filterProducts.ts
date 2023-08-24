import { SpecificationFilter } from '@/types/Filters/SpecificationFilter';
import { TypeFilter } from '@/types/Filters/TypeFilter';
import { Product } from '@/types/Product';

export const filterProducts = (
  products: Product[],
  filters: { type: TypeFilter; specification: SpecificationFilter },
) => {
  let filteredProducts = [...products];
  const { type, specification } = filters;

  switch (type) {
  case TypeFilter.ALL:
    break;
  default:
    filteredProducts = filteredProducts.filter(
      (product) => product.type === type,
    );
    break;
  }

  switch (specification) {
  case SpecificationFilter.ALL:
    break;
  default:
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.specification === specification,
    );
  }

  return filteredProducts;
};
