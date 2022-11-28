import * as React from 'react';
import Box from '@mui/material/Box';
import {
  ukUA,
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';
import Pagination from '@mui/material/Pagination';
import { columns, rows, showImgColumn } from './TableData';

const CustomPagination: React.FC = () => {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      count={pageCount}
      page={page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
};

const TableComponent: React.FC = () => {
  // const showImgColumn = rows.some(item => item.hasOwnProperty('image'));

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        pagination
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        components={{
          Pagination: CustomPagination,
        }}
        columnVisibilityModel={{
          image: showImgColumn,
        }}
        rows={rows}
        columns={columns}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        localeText={ukUA.components.MuiDataGrid.defaultProps.localeText}
      />
    </Box>
  );
};

export default TableComponent;
