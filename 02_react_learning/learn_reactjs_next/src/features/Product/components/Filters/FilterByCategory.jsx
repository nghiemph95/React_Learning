import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import categoryApi from 'api/categoryApi';
import { info } from 'node-sass';

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

function FilterByCategory({ onChange }) {
  /** State */
  const [categoryList, setCategoryList] = useState([]);

  /** Query category data */
  useEffect(() => {
    (async () => {
      try {
        const response = await categoryApi.getAll();
        console.log({ response });
      } catch (error) {
        console.log('Failed to query data', error);
      }
    })();
  }, []);

  /** Controller */
  // const handleCategoryClick = (category) => {
  //   if (onChange) {
  //     onChange(category.id);
  //   }
  // };

  return (
    <Box>
      <Typography>DANH MUC SAN PHAM</Typography>

      <ul>
        {categoryList.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
