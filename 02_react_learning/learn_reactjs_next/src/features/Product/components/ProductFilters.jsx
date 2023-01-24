import React from 'react';
import PropTypes from 'prop-types';

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters(props) {
  return <div>Product Filters</div>;
}

export default ProductFilters;
