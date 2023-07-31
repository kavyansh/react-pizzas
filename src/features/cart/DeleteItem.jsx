import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

function DeleteItem({ id }) {
  const dispatch = useDispatch();

  function handleDeleteItem() {
    dispatch(deleteItem(id));
  }
  return (
    <Button onClick={handleDeleteItem} type="small">
      delete
    </Button>
  );
}

export default DeleteItem;
