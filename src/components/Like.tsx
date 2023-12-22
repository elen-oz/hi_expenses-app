import { CiHeart } from 'react-icons/ci';

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  return <CiHeart onClick={onClick} />;
};
export default Like;
