import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link } from '@material-ui/core';
import { NavLink, useRouteMatch } from 'react-router-dom';

ProductMenu.propTypes = {};

function ProductMenu(props) {
  const { url } = useRouteMatch();

  return (
    <Box component="ul">
      <li>
        <Link component={NavLink} to={url}>
          Description
        </Link>
      </li>

      <li>
        <Link component={NavLink} to={`${url}/additional`}>
          Additional Information
        </Link>
      </li>

      <li>
        <Link component={NavLink} to={`${url}/reviews`}>
          Reviews
        </Link>
      </li>
    </Box>
  );
}

export default ProductMenu;
