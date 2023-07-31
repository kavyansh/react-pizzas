import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  const isUpdating = fetcher.state === 'loading';
  // fetcher.Form is like similar to Form element
  // but it does not navigate but revalidates the page.
  // Form elements loads the action of action=whatever path and navigates to that path.
  //  From was basically submition with navigation
  // fetcher.Form is just submission with validation and no navigation.
  // Revalidation meaning the router knows something is updted in the data hence it will re fetch the current data again
  // and render the updated view.

  return (
    <fetcher.Form method="PATCH" classname="text-right">
      <Button type="primary">{isUpdating ? 'Updating...' : 'Make Priority'}</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };
  const { orderId } = params;
  await updateOrder(orderId, data);

  return null;
}
