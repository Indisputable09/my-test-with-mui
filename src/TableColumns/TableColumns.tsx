import { GridColDef } from '@mui/x-data-grid';
import MoreActions from '../components/TableComponents/MoreActions';
import ControlledSwitch from '../components/TableComponents/ControlledSwitch';
import BasicActions from '../components/TableComponents/BasicActions';
import PriceCell from '../components/TableComponents/PriceCell';

export const productCatalogColumns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 50,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'image',
    headerName: 'Зображення',
    width: 110,
    editable: false,
    headerAlign: 'center',
    align: 'center',
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
    headerName: 'Назва',
    minWidth: 330,
    flex: 1,
    editable: false,
  },
  {
    field: 'sku',
    headerName: 'Артикул',
    width: 110,
    editable: false,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'price',
    headerName: 'Ціна',
    width: 110,
    editable: false,
    headerAlign: 'center',
    align: 'center',
    renderCell: params => {
      return (
        <PriceCell price={params.row.price} discount={params.row?.discount} />
      );
    },
  },
  {
    field: 'quantity',
    headerName: 'Кількість',
    width: 110,
    editable: false,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'category',
    headerName: 'Категорія',
    width: 130,
    editable: false,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'status',
    headerName: 'Опубліковано',
    width: 100,
    editable: false,
    headerAlign: 'center',
    align: 'center',
    renderCell: params => {
      return <ControlledSwitch status={params.row.status} />;
    },
  },
  {
    field: 'actions',
    headerName: 'Дії',
    editable: false,
    sortable: false,
    headerAlign: 'center',
    align: 'center',
    disableColumnMenu: true,
    // renderCell: () => <MoreActions darkTheme={darkTheme} />,
    renderCell: () => <MoreActions />,
    width: 120,
  },
];

export const productCategoriesColumns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 50,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'image',
    headerName: 'Зображення',
    width: 110,
    editable: false,
    headerAlign: 'center',
    align: 'center',
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
    headerName: 'Назва',
    width: 700,
    flex: 1,
    editable: false,
  },
  {
    field: 'sort',
    headerName: 'Сортування',
    width: 100,
    editable: false,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'actions',
    headerName: 'Дії',
    editable: false,
    sortable: false,
    disableColumnMenu: true,
    renderCell: () => <BasicActions />,
    width: 120,
    headerAlign: 'center',
    align: 'center',
  },
];

export const languagesColumns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 50,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'name',
    headerName: 'Назва',
    width: 910,
    flex: 1,
    editable: false,
  },
  {
    field: 'actions',
    headerName: 'Дії',
    editable: false,
    sortable: false,
    headerAlign: 'center',
    align: 'center',
    disableColumnMenu: true,
    renderCell: () => <BasicActions />,
    width: 120,
  },
];

export const FAQColumns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 50,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'name',
    headerName: 'Назва',
    width: 910,
    flex: 1,
    editable: false,
  },
  {
    field: 'actions',
    headerName: 'Дії',
    editable: false,
    sortable: false,
    disableColumnMenu: true,
    renderCell: () => <BasicActions />,
    width: 120,
    headerAlign: 'center',
    align: 'center',
  },
];

export const citiesColumns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 50,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'name',
    headerName: 'Назва',
    width: 910,
    flex: 1,
    editable: false,
  },
  {
    field: 'actions',
    headerName: 'Дії',
    editable: false,
    sortable: false,
    headerAlign: 'center',
    align: 'center',
    disableColumnMenu: true,
    renderCell: () => <BasicActions />,
    width: 120,
  },
];

export const manufacturersColumns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 50,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'image',
    headerName: 'Зображення',
    width: 110,
    editable: false,
    headerAlign: 'center',
    align: 'center',
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
    headerName: 'Назва',
    width: 910,
    flex: 1,
    editable: false,
  },
  {
    field: 'actions',
    headerName: 'Дії',
    editable: false,
    sortable: false,
    headerAlign: 'center',
    align: 'center',
    disableColumnMenu: true,
    renderCell: () => <BasicActions />,
    width: 120,
  },
];
