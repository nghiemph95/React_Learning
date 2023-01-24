import React from 'react';
import PropTypes from 'prop-types';
import FilterByCategory from './Filters/FilterByCategory';
import { Box } from '@material-ui/core';
import FilterByPrice from './Filters/FilterByPrice';

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
  /** Khi FilterByCategory thay đổi, nó sẽ truyền newCategoryId lên handleCategoryChange và
   * sau đó báo lên thằng cha
   */
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;

    const newFilters = {
      ...filters,
      'category.id': newCategoryId,
    };

    onChange(newFilters);
  };

  const handlePriceChange = (values) => {
    console.log(values);
  };

  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
      <FilterByPrice onChange={handlePriceChange} />
    </Box>
  );
}

export default ProductFilters;
