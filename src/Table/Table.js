import React from 'react';
import PropTypes from 'prop-types';
import {AutoSizer, CellMeasurer, Grid} from 'react-virtualized';
import {TableRow, TableRowProps} from './TableRow.js';

const numColumns = 10;
const numRows = 10;
const width = '10px';

const Table = ({
  items,
}) => (
  <div>
    <AutoSizer>
      {({ height, width }) => (
        <CellMeasurer
          cellRenderer={TableRow}
          columnCount={numColumns}
          rowCount={numRows}
          width={width}
        >
          {({ getRowHeight }) => (
            <Grid
              cellRenderer={({ columnIndex, key, rowIndex, style }) => <div key={key} style={style}>...</div>}
              columnCount={numColumns}
              columnWidth={({ index }) => 100}
              height={height}
              rowCount={numRows}
              rowHeight={getRowHeight}
              width={width}
            />
          )}
        </CellMeasurer>
      )}
    </AutoSizer>
    this is the table
    <TableRow />
  </div>
);

Table.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(TableRowProps)),
};

export default Table;
