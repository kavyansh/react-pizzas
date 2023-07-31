import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();
  // the component is rendered when the menu is loaded.
  // otherwise it will stay on the same page unless a loader is there and applayout component is rendered.

  return (
    <>
      <ul className="divide-y divide-stone-200 px-2">
        {menu.map((menuItem) => {
          return <MenuItem key={menuItem.id} pizza={menuItem} />;
        })}
      </ul>
    </>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
