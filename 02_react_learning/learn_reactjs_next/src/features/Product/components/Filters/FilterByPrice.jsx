import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import { useState } from 'react';

FilterByPrice.propTypes = {};

function FilterByPrice(props) {
  /** State */
  const [value, setValue] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  /** Controller */
  const handleSubmit = () => {};

  return (
    <Box>
      <Typography variant="subtitle2">GIÁ</Typography>

      <Box>
        <TextField name="salePrice_gte" />
        <span>-</span>
        <TextField name="salePrice_lte" />
      </Box>

      <Button variant="outlined" color="primary" onClick={handleSubmit}>
        Áp dụng
      </Button>
    </Box>
  );
}

export default FilterByPrice;
