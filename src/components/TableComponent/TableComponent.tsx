import * as React from 'react';
import Box from '@mui/material/Box';
import { ukUA, DataGrid } from '@mui/x-data-grid';
import { columns, rows, showImgColumn } from './TableData';
import Toolbar from '../Toolbar';

export interface IRow {
  id: number;
  image?: string;
  name: string;
  status: string;
}

const TableComponent: React.FC = () => {
  const [filter, setFilter] = React.useState<string>('');
  const [selectedRows, setSelectedRows] = React.useState<IRow[]>([]);
  const [pageSize, setPageSize] = React.useState<number>(5);

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
        pageSize={pageSize}
        onPageSizeChange={newPageSize => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 15, 20]}
        // rowsPerPageOptions={[20, 50, 100, 300]}
        pagination
        checkboxSelection
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
