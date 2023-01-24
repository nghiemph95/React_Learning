import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import productApi from 'api/productApi';
import { useState } from 'react';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductList from '../components/ProductList';
import { Pagination } from '@material-ui/lab';
import ProductSort from '../components/ProductSort';
import ProductFilters from '../components/ProductFilters';
import ProductFilterSkeleton from '../components/ProductFilterSkeleton';
import FilterViewer from '../components/FilterViewer';

ListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: '250px',
  },

  right: {
    flex: '1 1 0',
  },

  pagination: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',

    marginTop: '20px',
    paddingBottom: '10px',
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
    limit: 9,
    total: 10,
    page: 1,
  });

  // filter
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 9,
    _sort: 'salePrice:ASC',
  });

  /** Controler */
  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);
        setProductList(data);
        setPagination(pagination);
        console.log({ data, pagination, filters });
      } catch (error) {
        console.log('Fail to query', error);
      }

      setLoading(false);
    })();
  }, [filters]);

  const handlePageChange = (event, page) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page,
    }));
  };

  const handleSortChange = (newSortValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _sort: newSortValue,
    }));
  };

  const handleFiltersChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  const setNewFilters = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              {loading ? (
                <ProductFilterSkeleton />
              ) : (
                <ProductFilters filters={filters} onChange={handleFiltersChange} />
              )}
            </Paper>
          </Grid>

          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductSort currentSort={filters._sort} onChange={handleSortChange} />
              <FilterViewer filters={filters} onChange={setNewFilters} />

              {loading ? <ProductSkeletonList length={9} /> : <ProductList data={productList} />}

              <Box className={classes.pagination}>
                <Pagination
                  color="primary"
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  onChange={handlePageChange}
                ></Pagination>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
