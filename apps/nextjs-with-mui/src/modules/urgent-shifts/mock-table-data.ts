import { GridColDef } from '@mui/x-data-grid';

export const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
  },
  {
    field: 'email',
    headerName: 'Email',
    minWidth: 240,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
  },
];
