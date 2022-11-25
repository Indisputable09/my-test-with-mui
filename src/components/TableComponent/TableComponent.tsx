import * as React from 'react';
import Box from '@mui/material/Box';
import {
  DataGrid,
  GridColDef,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';
import Pagination from '@mui/material/Pagination';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 130 },
  {
    field: 'image',
    headerName: 'Image',
    width: 230,
    editable: true,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 330,
    editable: true,
  },
  {
    field: 'publication',
    headerName: 'Publication',
    width: 230,
    editable: true,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    sortable: true,
    width: 230,
  },
];

const rows = [
  { id: 1, image: 'Snow', name: 'Jon', publication: 35, actions: 'help' },
  {
    id: 2,
    image: 'Lannister',
    name: 'Cersei',
    publication: 42,
    actions: 'test',
  },
  {
    id: 3,
    image: 'Lannister',
    name: 'Jaime',
    publication: 45,
    actions: 'clean',
  },
  { id: 4, image: 'Stark', name: 'Arya', publication: 16, actions: 'drink' },
  {
    id: 5,
    image: 'Targaryen',
    name: 'Daenerys',
    publication: null,
    actions: 'more test',
  },
  {
    id: 6,
    image: 'Melisandre',
    name: null,
    publication: 150,
    actions: 'check',
  },
  {
    id: 7,
    image: 'Clifford',
    name: 'Ferrara',
    publication: 44,
    actions: 'filter',
  },
  {
    id: 8,
    image: 'Frances',
    name: 'Rossini',
    publication: 36,
    actions: 'show',
  },
  { id: 9, image: 'Roxie', name: 'Harvey', publication: 65, actions: 'hide' },
];

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
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      {/* <IconButton size="large" edge="start" color="inherit" aria-label="drag">
        <MoreVertIcon />
      </IconButton> */}
      <DataGrid
        pagination
        pageSize={5}
        rowsPerPageOptions={[5]}
        components={{
          Pagination: CustomPagination,
        }}
        rows={rows}
        columns={columns}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export default TableComponent;
//----------------------------------------------------

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import {
//   DataGrid,
//   gridPageCountSelector,
//   gridPageSelector,
//   useGridApiContext,
//   useGridSelector,
// } from '@mui/x-data-grid';
// import { useDemoData } from '@mui/x-data-grid-generator';
// import Pagination from '@mui/material/Pagination';

// const myData = {
//   columns: [
// { field: 'id', headerName: 'ID', width: 130 },
// { field: 'image', headerName: 'Image', width: 230 },
// { field: 'name', headerName: 'Name', width: 330 },
// { field: 'publication', headerName: 'Publication', width: 230 },
// { field: 'actions', headerName: 'Actions', width: 230 },
//   ],
//   rows: [{ id: 1, desk: 'D-4812' }],
// };

// const CustomPagination: React.FC = () => {
//   const apiRef = useGridApiContext();
//   console.log('apiRef', apiRef);
//   const page = useGridSelector(apiRef, gridPageSelector);
//   const pageCount = useGridSelector(apiRef, gridPageCountSelector);

//   return (
//     <Pagination
//       color="primary"
//       count={pageCount}
//       page={page + 1}
//       onChange={(event, value) => apiRef.current.setPage(value - 1)}
//     />
//   );
// };

// const TableComponent: React.FC = () => {
//   const { data } = useDemoData({
//     dataSet: 'Commodity',
//     rowLength: 100,
//     maxColumns: 6,
//   });
//   console.log('data', data);

//   return (
//     <Box sx={{ height: 400, width: '100%' }}>
//       <DataGrid
// pagination
// pageSize={5}
// rowsPerPageOptions={[5]}
// components={{
//   Pagination: CustomPagination,
// }}
//         textAlign="center"
//         // {...data}
//         {...myData}
//       />
//     </Box>
//   );
// };

// export default TableComponent;
