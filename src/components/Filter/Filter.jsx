import React from "react";
import style from './Filter.module.css';
import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "../../redux/contacts/filter.slice"
import { Filtered } from "../../redux/selectors"

export const Filter = () => {

  const dispatch = useDispatch();
  const filter = useSelector(Filtered)

  const onFilterChange = (query) => {
    dispatch(setFilter(query))
  }

  return (
    <label>
      <input className={style.FilterFormInput}
        type="text"
        value={filter}
        onChange={(event) => onFilterChange(event.target.value)} />
    </label>
  );
};


