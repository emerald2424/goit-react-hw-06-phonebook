import {Label} from './Filter.styled';
import {Form } from './Filter.styled';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const Filter = ({ onSearch }) => {
  const value = useSelector(state => state.filter);

  return (
    <Form>
      <Label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onSearch}
      />
      </Label>
    </Form> 
  );
}

Filter.propTypes = {
  onSearch: PropTypes.func.isRequired
}
