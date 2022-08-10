import {
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';

const TableFilter = () => (
  <>
    <FormControl
      sx={{
        display: { xs: 'none', sm: 'flex' },
        py: { xs: 2, sm: 0 },
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <FormLabel id="demo-radio-buttons-group-label" sx={{ mr: 2 }}>
        Filters
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        row
        name="radio-buttons-group">
        <FormControlLabel value="all" control={<Radio />} label="All" />
        <FormControlLabel
          value="upcoming"
          control={<Radio />}
          label="Upcoming"
        />
        <FormControlLabel value="ongoing" control={<Radio />} label="Ongoing" />
        <FormControlLabel value="past" control={<Radio />} label="Past" />
      </RadioGroup>
    </FormControl>
    <FormControl
      sx={{
        display: { xs: 'block', sm: 'none' },
        py: { xs: 2, sm: 0 },
        flexDirection: 'row',
        alignItems: 'center',
      }}
      fullWidth>
      <TextField
        select
        defaultValue={['all']}
        label="Filters"
        fullWidth
        size="small"
        SelectProps={{ multiple: true, label: 'Filters' }}>
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="upcoming">Upcoming</MenuItem>
        <MenuItem value="ongoing">Ongoing</MenuItem>
        <MenuItem value="past">Past</MenuItem>
      </TextField>
    </FormControl>
  </>
);

export default TableFilter;
