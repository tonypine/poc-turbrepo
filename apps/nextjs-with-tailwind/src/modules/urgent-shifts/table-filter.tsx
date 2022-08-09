import RadioField from 'components/radio-field';

const TableFilter = () => (
  <div className="sm:flex items-center sm:space-x-3">
    <div>Filters:</div>
    <fieldset>
      <div className="space-y-2 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
        <RadioField name="filters" value="all">
          All
        </RadioField>
        <RadioField name="filters" value="upcoming">
          Upcoming
        </RadioField>
        <RadioField name="filters" value="ongoing">
          Ongoing
        </RadioField>
        <RadioField name="filters" value="past">
          Past
        </RadioField>
      </div>
    </fieldset>
  </div>
);

export default TableFilter;
