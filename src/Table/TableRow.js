import React from 'react';
import PropTypes from 'prop-types';

export const TableRowProps = {
  value: PropTypes.any.isRequired,
};

export const TableRow = ({ children }) => (
  <div>
    this is the item of the table
  </div>
);

TableRow.propTypes = {
  ...TableRowProps,
  children: PropTypes.any,
};
