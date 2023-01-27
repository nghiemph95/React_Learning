import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { cartTotalSelector } from './selectors';

CartFeature.propTypes = {};

function CartFeature(props) {
  const cartTotalAmount = useSelector(cartTotalSelector);

  return <div>Product Amount : {cartTotalAmount}</div>;
}

export default CartFeature;
