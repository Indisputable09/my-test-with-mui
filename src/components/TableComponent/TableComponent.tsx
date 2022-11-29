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
import Toolbar from '../Toolbar';

export interface IRow {
  id: number;
  image?: string;
  name: string;
  status: string;
}

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
  const [filter, setFilter] = React.useState<string>('');
  const [selectedRows, setSelectedRows] = React.useState<IRow[]>([]);

  const handleChangeFilter = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    setFilter((e.target as HTMLInputElement).value);
  };

  const createFilter = () => {
    const normalizedFilterValue = filter.toLocaleLowerCase();
    const filteredRows = rows.filter(row =>
      row.name.toLocaleLowerCase().includes(normalizedFilterValue)
    );
    return filteredRows;
  };

  const onRowsSelectionHandler = (ids: number[]) => {
    const selectedRowsData = ids.map(id => rows.find(row => row.id === id));
    setSelectedRows(selectedRowsData as IRow[]);
  };

  const filteredRows = createFilter();

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <Toolbar
        handleChangeFilter={handleChangeFilter}
        filter={filter}
        selectedRows={selectedRows}
      />
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
        rows={filteredRows}
        columns={columns}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        localeText={ukUA.components.MuiDataGrid.defaultProps.localeText}
        onSelectionModelChange={ids => onRowsSelectionHandler(ids as number[])}
      />
    </Box>
  );
};

export default TableComponent;
