import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import productApi from 'api/productApi';
import { useState } from 'react';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductList from '../components/ProductList';

ListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: '250px',
  },

  right: {
    flex: '1 1 0',
  },
}));

function ListPage(props) {
  /** Styles */
  const classes = useStyles();

  /** States */
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  /** Controler */
  useEffect(() => {
    (async () => {
      try {
        const { data } = await productApi.getAll({ _page: 1, _limit: 10 });
        setProductList(data);
      } catch (error) {
        console.log('Fail to query', error);
      }

      setLoading(false);
    })();
  }, []);
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>Left Column</Paper>
          </Grid>

          <Grid item className={classes.right}>
            <Paper elevation={0}>{loading ? <ProductSkeletonList /> : <ProductList data={productList} />}</Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;