import { Input, Select } from 'antd';
const { Option } = Select

const Searcher = () => {

  const selectBefore = (
    <Select defaultValue="Nombre" className="select-before">
      <Option value="Nombre">Nombre</Option>
      <Option value="Tipo">Tipo de pokemon</Option>
    </Select>
  );

  return <Input.Search
    addonBefore={selectBefore}
    allowClear
    enterButton="Search"
    placeholder='Buscar... '
  />
}

export { Searcher };