import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { onFilterChange } from 'redux/phoneBookReducer';
import { Input, Paragraph, Title } from './Filter.styled';

export const Filter = ({ type }) => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const onFilter = event => {
    const inputValue = event.target.value;
    dispatch(onFilterChange(inputValue));
  };
  return (
    <div>
      <Title>Contacts</Title>
      <Paragraph>Find contact by name</Paragraph>
      <Input type={type} value={filter} onChange={onFilter}></Input>
    </div>
  );
};
