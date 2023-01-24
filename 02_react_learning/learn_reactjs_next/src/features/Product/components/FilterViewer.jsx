import React from 'react';
import PropTypes from 'prop-types';
import { Box, Chip, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    padding: 0,
    alignItems: 'center',

    margin: theme.spacing(2, 0),
    listStyleType: 'none',

    '& > li': {
      margin: 0,
      padding: theme.spacing(1),
    },
  },
}));

const FILTER_LIST = [
  {
    id: 1,
    getLabel: (filters) => 'Giao hàng miễn phí',
    isActive: (filters) => filters.isFreeShip,
    isVisible: () => true,
    isRemovable: false,
    onRemove: () => {},
    onToggle: (filters) => {
      const newFilters = { ...filters };

      if (newFilters.isFreeShip) {
        delete newFilters.isFreeShip;
      } else {
        newFilters.isFreeShip = true;
      }

      return newFilters;
    },
  },
  {
    id: 2,
    getLabel: (filters) => 'Có khuyến mãi',
    isActive: (filters) => true,
    isVisible: (filters) => true,
    isRemovable: true,
    onRemove: (filters) => {},
    onToggle: (filters) => {},
  },
  {
    id: 3,
    getLabel: (filters) => 'Khoảng giá',
    isActive: (filters) => true,
    isVisible: (filters) => true,
    isRemovable: true,
    onRemove: (filters) => {},
    onToggle: (filters) => {},
  },
  {
    id: 4,
    getLabel: (filters) => 'Dịch vụ',
    isActive: (filters) => true,
    isVisible: (filters) => true,
    isRemovable: true,
    onRemove: (filters) => {},
    onToggle: (filters) => {},
  },
];

FilterViewer.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function FilterViewer({ filters = {}, onChange = null }) {
  /** Styles */
  const classes = useStyles();

  /** Render */
  return (
    <Box component="ul" className={classes.root}>
      {FILTER_LIST.filter((filter) => filter.isVisible(filters)).map((x) => (
        <li key={x.id}>
          <Chip
            label={x.getLabel(filters)}
            color={x.isActive(filters) ? 'secondary' : 'default'}
            clickable={!x.isRemovable}
            onClick={
              x.isRemovable
                ? null
                : () => {
                    if (!onChange) return;

                    const newFilters = x.onToggle(filters);
                    onChange(newFilters);
                  }
            }
            onDelete={
              x.isRemovable
                ? () => {
                    if (!onChange) return;

                    const newFilters = x.onRemove(filters);
                    onChange(newFilters);
                  }
                : null
            }
          />
        </li>
      ))}
    </Box>
  );
}

export default FilterViewer;
