import { Link } from 'react-router-dom';

function Button({ type, children, onClick = null, disabled = false, to = null }) {
  const base =
    'inline-block text-sm rounded-full bg-pizzaBtn font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-red-300 focus:outline-none focus:ring focus:ring-red-300 focus:ring-offset-2 disabled:cursor-not-allowed text-white';

  const styles = {
    primary: `${base} px-4 py-4 sm:px-6  sm:py-4`,
    small: `${base} px-4 py-2 md:px-5 md:py-2.5 text-xs`,
    round: `${base} px-2.5 py-1 md:px-3.5 md:py-2 text-sm `,
    secondary:
      'inline-block text-sm rounded-full  border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button className={styles[type]} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
