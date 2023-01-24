import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Checkbox, FormControlLabel, makeStyles, TextField, Typography } from '@material-ui/core';
import { useState } from 'react';
import { CheckBox } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    borderTop: `1px solid ${theme.palette.grey[300]}`,

    padding: theme.spacing(2),
  },

  list: {
    padding: 0,
    margin: 0,
    listStyleType: 'none',

    '& > li': {
      margin: 0,
    },
  },
}));

FilterByService.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function FilterByService({ filters = {}, onChange }) {
  /** Styles */
  const classes = useStyles();

  /** State */
  // const [values, setValues] = useState({
  //   isPromotion: Boolean(filters.isPromotion),
  //   isFreeShip: Boolean(filters.isFreeShip),
  // });

  /** Controller */
  const handleChange = (e) => {
    const { name, checked } = e.target;
    // setValues((preValues) => ({
    //   ...preValues,
    //   [name]: value,
    // }));

    if (onChange) onChange({ [name]: checked });
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DỊCH VỤ</Typography>

      <ul className={classes.list}>
        {[
          { value: 'isPromotion', label: 'Có Khuyến Mãi' },
          { value: 'isFreeShip', label: 'Vận chuyển miễn phí' },
        ].map((service) => (
          <li key={service.value}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Boolean(filters[service.value])}
                  onChange={handleChange}
                  name={service.value}
                  color="secondary"
                />
              }
              label={service.label}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByService;
