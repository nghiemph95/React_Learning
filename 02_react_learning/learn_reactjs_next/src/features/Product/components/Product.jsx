import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  return (
    <Box padding={1}>
      <Skeleton variant="rect" width="100%" height={118} />
      <img
        src="https://api.ezfrontend.com/uploads/9ff7d29c2ebad4fd802685eb770d9452_417240087a.jpg"
        alt={product.name}
        width="100%"
      />

      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        {product.salePrice} - {product.promotionPercent}%
      </Typography>
    </Box>
  );
}

export default Product;
