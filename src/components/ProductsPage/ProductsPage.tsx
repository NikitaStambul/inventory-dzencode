'use client';

import { useAppSelector } from '@/store/hooks';
import styles from './ProductsPage.module.scss';
import ProductsList from '../ProductsList';
import React, { useState } from 'react';
import { TypeFilter } from '@/types/Filters/TypeFilter';
import { SpecificationFilter } from '@/types/Filters/SpecificationFilter';
import { filterProducts } from '@/helpers/filterProducts';
import classNames from 'classnames';
import DeleteProductModal from '../DeleteProductModal';
import Loader from '../Loader';

export default function ProductsPage() {
  const { products, isLoaded } = useAppSelector((state) => state.productsState);
  const [selectedFilters, setSelectedFilters] = useState({
    type: TypeFilter.ALL,
    specification: SpecificationFilter.ALL,
  });

  const handleTypeFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const type = event.target.value as TypeFilter;

    setSelectedFilters((filters) => ({
      ...filters,
      type,
    }));
  };

  const handleSpecificationFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const specification = event.target.value as SpecificationFilter;

    setSelectedFilters((filters) => ({
      ...filters,
      specification,
    }));
  };

  const filteredProducts = filterProducts(products, selectedFilters);

  return (
    <div className={styles.page}>
      {isLoaded ? (
        <>
          <div className={styles.page__heading}>
            <h2 className={styles.page__title}>Products / {products.length}</h2>
            <div className={styles.page__filters}>
              <div className="input-group">
                <div className="input-group-prepend">
                  <label
                    className={classNames(
                      styles.page__filterTitle,
                      'input-group-text',
                    )}
                    htmlFor="typeFilter"
                  >
                    Type
                  </label>
                </div>
                <select
                  className={classNames(styles.page__filter, 'form-select')}
                  value={selectedFilters.type}
                  onChange={handleTypeFilterChange}
                  id="typeFilter"
                >
                  {Object.values(TypeFilter).map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <label
                    className={classNames(
                      styles.page__filterTitle,
                      'input-group-text',
                    )}
                    htmlFor="specificationFilter"
                  >
                    Specification
                  </label>
                </div>
                <select
                  className={classNames(styles.page__filter, 'form-select')}
                  value={selectedFilters.specification}
                  onChange={handleSpecificationFilterChange}
                  id="specificationFilter"
                >
                  {Object.values(SpecificationFilter).map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <ProductsList products={filteredProducts} />
          <DeleteProductModal />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
