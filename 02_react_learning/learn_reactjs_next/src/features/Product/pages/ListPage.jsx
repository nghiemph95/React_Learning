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
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useMemo } from 'react';

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

  // useHistory
  const history = useHistory();

  // useLocation
  /** Với location, mỗi lần URL thay đổi thì sẽ trả về object location mới
   * nhưng history thì ko thay đổi, nhưng nó có thể thay đổi giá trị bên trong history
   * mặc dù object history ko thay đổi
   */
  const location = useLocation();
  // queryParams
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search); // chuyển từ chuỗi thành object
    // true -> 'true'
    // { isPromotion: 'true'}
    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 9,
      _sort: params._sort || 'salePrice:ASC',
      isPromotion: params.isPromotion === 'true',
      isFreeShip: params.isFreeShip === 'true',
    };
  }, [location.search]);

  console.log({ queryParams });

  // filter
  // const [filters, setFilters] = useState(() => ({
  //   ...queryParams,
  //   _page: Number.parseInt(queryParams._page) || 1,
  //   _limit: Number.parseInt(queryParams._limit) || 9,
  //   _sort: queryParams._sort || 'salePrice:ASC',
  // }));

  /** Controler */

  // useEffect(() => {
  //   // sync filters to URL
  //   history.push({
  //     pathname: history.location.pathname,
  //     search: queryString.stringify(filters), // chuyển từ object thành chuỗi
  //   });
  //   /** không sử dụng location trong indicator vì mỗi lần history.push sẽ làm location thay đổi
  //    * dẫn đến useEffect bị gọi lai vô hạn lần
  //    */
  // }, [history, filters]);

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(queryParams);
        setProductList(data);
        setPagination(pagination);
        console.log({ data, pagination, queryParams });
      } catch (error) {
        console.log('Fail to query', error);
      }

      setLoading(false);
    })();
  }, [queryParams]);

  const handlePageChange = (event, page) => {
    // setFilters((prevFilters) => ({
    //   ...prevFilters,
    //   _page: page,
    // }));

    const filters = {
      ...queryParams,
      _page: page,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters), // chuyển từ object thành chuỗi
    });
  };

  const handleSortChange = (newSortValue) => {
    // setFilters((prevFilters) => ({
    //   ...prevFilters,
    //   _sort: newSortValue,
    // }));

    const filters = {
      ...queryParams,
      _sort: newSortValue,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters), // chuyển từ object thành chuỗi
    });
  };

  const handleFiltersChange = (newFilters) => {
    // setFilters((prevFilters) => ({
    //   ...prevFilters,
    //   ...newFilters,
    // }));

    const filters = {
      ...queryParams,
      ...newFilters,
    };

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters), // chuyển từ object thành chuỗi
    });
  };

  const setNewFilters = (newFilters) => {
    // setFilters(newFilters);

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(newFilters), // chuyển từ object thành chuỗi
    });
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
                <ProductFilters filters={queryParams} onChange={handleFiltersChange} />
              )}
            </Paper>
          </Grid>

          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductSort currentSort={queryParams._sort} onChange={handleSortChange} />
              <FilterViewer filters={queryParams} onChange={setNewFilters} />

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
