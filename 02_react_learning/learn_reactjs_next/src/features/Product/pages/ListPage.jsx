import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import productApi from 'api/productApi';
import { useState } from 'react';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductList from '../components/ProductList';
import { Pagination } from '@material-ui/lab';

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
  //pagination
  const [pagination, setPagination] = useState({
    limit: 10,
    total: 10,
    page: 1,
  });

  // filter
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
  });

  /** Controler */
  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);
        setProductList(data);
        setPagination(pagination);
        console.log({ data, pagination });
      } catch (error) {
        console.log('Fail to query', error);
      }

      setLoading(false);
    })();
  }, [filters]);
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>Left Column</Paper>
          </Grid>

          <Grid item className={classes.right}>
            <Paper elevation={0}>
              {loading ? <ProductSkeletonList /> : <ProductList data={productList} />}

              <Pagination
                color="primary"
                count={Math.ceil(pagination.total / pagination.limit)}
                page={pagination.page}
              ></Pagination>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
