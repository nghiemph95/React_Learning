import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },

  menu: {
    paddingTop: '10px',
  },
}));

ProductFilterSkeleton.propTypes = {
  length: PropTypes.number,
};

ProductFilterSkeleton.defaultProps = {
  length: 6,
};

/** Function */
function ProductFilterSkeleton({ length }) {
  /** Styles */
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container>
        <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>

        {Array.from(new Array(length)).map((x, index) => (
          <Grid item key={index} xs={12} className={classes.menu}>
            <Box>
              <Skeleton width="70%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductFilterSkeleton;
