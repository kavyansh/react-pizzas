import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { increaseItemQuantity, decreaseItemQuantity, getCurrentQuantityById } from './cartSlice';

function UpdateItemQuantity({ id, currentQty = null }) {
  const dispatch = useDispatch();

  if (!id) return null;

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button onClick={() => dispatch(decreaseItemQuantity(id))} type="round">
        -
      </Button>
      <span className="text-sm font-medium">{currentQty}</span>
      <Button onClick={() => dispatch(increaseItemQuantity(id))} type="round">
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
