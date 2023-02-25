import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filtersSlice';
import { FilterInput, Label } from './Filter.styled';

export const Filter = function () {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const filterContacts = event => dispatch(setFilter(event.target.value));

  return (
    <Label>
      Find contact by name :
      <FilterInput name={filter} type="text" onChange={filterContacts} />
    </Label>
  );
};
