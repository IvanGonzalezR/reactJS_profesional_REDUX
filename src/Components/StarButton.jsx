import { StarOutlined, StarFilled } from '@ant-design/icons';
import { Button } from 'antd';

const StarButton = ({ isFavorite, onClick }) => {
  const Icon = isFavorite ? StarFilled : StarOutlined;
  return (
    <Button
      type='link'
      shape='circle'
      onClick={onClick}
      icon={<Icon />}
    // loading
    />
  );
};

export { StarButton };