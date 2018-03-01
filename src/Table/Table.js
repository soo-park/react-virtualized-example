// Ayasdi Inc. Copyright 2017 - all rights reserved.

import React from 'react';
import PropTypes from 'prop-types';

export const TableItemProps = {
  value: PropTypes.any.isRequired,
};

export const TableItem = ({ children }) => (
  <div>
    this is the item of the table
  </div>
);

TableItem.propTypes = {
  ...TableItemProps,
  children: PropTypes.any,
};

const Table = ({
  items,
}) => (
  <div>
    this is the table
    <TableItem />
  </div>
);

Table.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(TableItemProps)),
};

export default Table;
