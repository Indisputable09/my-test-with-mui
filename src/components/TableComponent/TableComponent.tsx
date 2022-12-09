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
  GridCellParams,
} from '@mui/x-data-grid';
import {
  ControlledSwitch,
  MoreActions,
  PriceCell,
  rows,
  showImgColumn,
} from './TableData';
import Toolbar from '../Toolbar';
import { useTableComponentStyles } from './TableComponent.styles';
import { Checkbox, CheckboxProps } from '@mui/material';
import { CellExpandComponent } from './CellExpand';

export interface IRow {
  id: number;
  image?: string;
  name: string;
  status: string;
}

interface ITableComponentProps {
  darkTheme: boolean;
}

const TableComponent: React.FC<ITableComponentProps> = ({ darkTheme }) => {
  const [filter, setFilter] = React.useState<string>('');
  const [selectedRows, setSelectedRows] = React.useState<IRow[]>([]);
  const [pageSize, setPageSize] = React.useState<number>(5);

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 50,
    },
    {
      field: 'image',
      headerName: 'Image',
      width: 110,
      editable: false,
      renderCell: params => {
        return (
          <div>
            <img src={params.row.image} alt={params.row.name} width="60" />
          </div>
        );
      },
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 330,
      editable: false,
      renderCell: (params: GridCellParams) => {
        return <CellExpandComponent params={params} darkTheme={darkTheme} />;
      },
    },
    {
      field: 'sku',
      headerName: 'SKU',
      width: showImgColumn ? 110 : 220,
      editable: false,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 110,
      editable: false,
      renderCell: params => {
        return (
          <PriceCell price={params.row.price} discount={params.row?.discount} />
        );
      },
    },
    {
      field: 'category',
      headerName: 'Category',
      width: 150,
      editable: false,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
      editable: false,
      renderCell: params => {
        return (
          <ControlledSwitch status={params.row.status} darkTheme={darkTheme} />
        );
      },
    },
    {
      field: 'actions',
      headerName: '',
      editable: false,
      sortable: false,
      disableColumnMenu: true,
      renderCell: () => <MoreActions darkTheme={darkTheme} />,
      width: 120,
    },
  ];

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
    <Box sx={{ height: 400, width: '100%' }}>
      <Toolbar
        handleChangeFilter={handleChangeFilter}
        filter={filter}
        selectedRows={selectedRows}
        darkTheme={darkTheme}
      />
      <DataGrid
        // autoHeight
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
