import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { cartItemsCountSelector, cartTotalSelector } from './selectors';
import { Box, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { formatPrice } from 'utils';

CartFeature.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1),
  },

  left: {
    width: '700px',
    padding: theme.spacing(1.5),
    borderRight: `15px solid ${theme.palette.grey[100]}`,
  },

  right: {
    flex: '1 1 0',
    padding: theme.spacing(1.5),
  },

  header: {
    margin: theme.spacing(1, 0),
  },
}));

function CartFeature(props) {
  /** Styles */
  const classes = useStyles();

  const cartTotalAmount = useSelector(cartTotalSelector);
  const cartCountProduct = useSelector(cartItemsCountSelector);

  const product = useSelector((state) => state.cart.cartItems);

  return (
    <Box className={classes.root}>
      <Container>
        <Grid container>
          <Grid item className={classes.header}>
            <Typography>GIỎ HÀNG ({`${cartCountProduct}`} sản phẩm)</Typography>
          </Grid>
        </Grid>

        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              {formatPrice(cartTotalAmount)}
            </Grid>

            <Grid item className={classes.right}>
              Right
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default CartFeature;
