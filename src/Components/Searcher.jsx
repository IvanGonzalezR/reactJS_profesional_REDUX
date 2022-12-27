import { Input, Select } from 'antd';
import { setSearchCriteria, setSearchValue } from '../slices/pokemonSlice';
import { useDispatch } from 'react-redux';
const { Option } = Select;


const Searcher = () => {
  const dispatch = useDispatch();

  const handleSelectChange = (value) => {
    dispatch(setSearchCriteria(value));
  }

  const handleInputValueChange = (value) => {
    if (value !== "") {
      dispatch(setSearchValue(value));
    } else {
      dispatch(setSearchValue("false"));
    }
  }

  const selectBefore = (
    <Select defaultValue="Nombre" className="select-before" onChange={(value) => handleSelectChange(value)}>
      <Option value="Nombre">Nombre</Option>
      <Option value="Tipo">Tipo de pokemon</Option>
    </Select>
  );

  return <Input
    addonBefore={selectBefore}
    allowClear
    placeholder='Buscar... '
    onChange={e => handleInputValueChange(e.target.value)}
  />
}

export { Searcher };