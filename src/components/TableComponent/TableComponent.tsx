import * as React from 'react';
import Box from '@mui/material/Box';
import {
  ukUA,
  DataGrid,
  GridColDef,
  GridColumnMenuProps,
  GridColumnMenuContainer,
  SortGridMenuItems,
  GridFilterMenuItem,
  HideGridColMenuItem,
  GridColumnsMenuItem,
} from '@mui/x-data-grid';
import { showImgColumn } from './TableData';
import Toolbar from '../Toolbar';
import { useTableComponentStyles } from './TableComponent.styles';
import { Checkbox, CheckboxProps } from '@mui/material';

export interface IRow {
  id: number;
  image?: string;
  name: string;
  price?: number;
  discount?: number;
  status?: string;
  sort?: number;
}

interface ITableComponentProps {
  darkTheme: boolean;
  columns: GridColDef[];
  rows: IRow[];
  page?: string;
}

const TableComponent: React.FC<ITableComponentProps> = ({
  darkTheme,
  columns,
  rows,
  page,
}) => {
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

  const { classes, cx } = useTableComponentStyles();

  const MyCheckbox: React.FC<CheckboxProps> = React.forwardRef((props, ref) => {
    return (
      <Checkbox
        ref={ref}
        {...props}
        className={cx(classes.checkbox, darkTheme ? 'dark' : null)}
      />
    );
  });

  const MyColumnMenu = React.forwardRef<HTMLUListElement, GridColumnMenuProps>(
    function GridColumnMenu(props: GridColumnMenuProps, ref) {
      const { hideMenu, currentColumn } = props;

      return (
        <GridColumnMenuContainer
          ref={ref}
          {...props}
          className={cx(classes.dataGridMenu, darkTheme ? 'dark' : null)}
        >
          <SortGridMenuItems onClick={hideMenu} column={currentColumn!} />
          <GridFilterMenuItem onClick={hideMenu} column={currentColumn!} />
          <HideGridColMenuItem onClick={hideMenu} column={currentColumn!} />
          <GridColumnsMenuItem onClick={hideMenu} column={currentColumn!} />
        </GridColumnMenuContainer>
      );
    }
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Toolbar
        handleChangeFilter={handleChangeFilter}
        filter={filter}
        selectedRows={selectedRows}
        darkTheme={darkTheme}
        page={page}
      />
      <DataGrid
        autoHeight
        pageSize={pageSize}
        onPageSizeChange={newPageSize => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 15, 20]}
        // rowsPerPageOptions={[20, 50, 100, 300]}
        className={cx(classes.dataGrid, darkTheme ? 'dark' : null)}
        components={{ BaseCheckbox: MyCheckbox, ColumnMenu: MyColumnMenu }}
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
