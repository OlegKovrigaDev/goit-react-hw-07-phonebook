import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filterSlice';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = e => dispatch(setFilter(e.target.value.trim()));

  return (
    <div>
      <label>
        Filter contacts by name:
        <input
          type="text"
          name="filter"
          placeholder="Search by name"
          value={filter}
          onChange={handleFilterChange}
          disabled={useSelector(selectContacts).length === 0}
        />
      </label>
    </div>
  );
}
