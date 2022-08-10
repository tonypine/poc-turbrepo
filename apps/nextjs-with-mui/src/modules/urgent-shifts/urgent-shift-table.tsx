import { DataGrid } from '@mui/x-data-grid';
import { useQuery } from '@tanstack/react-query';
import { getUsers } from 'modules/users';
import { columns } from 'modules/urgent-shifts/mock-table-data';

const UrgentShiftTable = () => {
  const { data } = useQuery(['users'], getUsers);

  if (!data) return null;

  return (
    <DataGrid
      rows={data}
      columns={columns}
      checkboxSelection
      disableSelectionOnClick
      disableColumnFilter
    />
  );
};

export default UrgentShiftTable;
