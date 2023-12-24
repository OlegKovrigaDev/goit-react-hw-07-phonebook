import React from 'react';

import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filterSlice';

const filterInputId = nanoid();

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => dispatch(changeFilter(e.target.value.toLowerCase()));

  return (
    <div>
      <label>
        Filter contacts by name:
        <input
          type="text"
          value={value}
          onChange={onChange}
          id={filterInputId}
        />
      </label>
    </div>
  );
}
