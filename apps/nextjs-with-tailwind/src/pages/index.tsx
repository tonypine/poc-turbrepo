import type { NextPage } from 'next';
import Header from 'layout/header';
import { Button } from 'components';
import TableFilter from 'modules/urgent-shifts/table-filter';
import UrgentShiftsTable from 'modules/urgent-shifts/urgent-shifts-table';

const Home: NextPage = () => (
  <div>
    <Header />
    <div className="p-5">
      <div className="sm:flex items-center mb-5">
        <div className="text-2xl">Urgent Shifts</div>
        <div className="ml-auto sm:mr-5 my-5 sm:my-0">
          <TableFilter />
        </div>
        <div>
          <Button>CREATE URGENT SHIFT</Button>
        </div>
      </div>
      <UrgentShiftsTable />
    </div>
  </div>
);

export default Home;
