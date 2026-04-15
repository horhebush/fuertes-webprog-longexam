import { Link } from 'react-router-dom';

const variantClasses = {
  primary: 'bg-navy text-white hover:bg-gold hover:text-navy',
  secondary: 'bg-white text-navy border-navy hover:bg-navy hover:text-white',
};

const Button = ({
  children,
  to,
  type = 'button',
  variant = 'secondary',
  className = '',
}) => {
  const classes = [
    'inline-flex items-center justify-center rounded-full border-2 border-navy px-5 py-2.5 text-sm font-semibold uppercase tracking-widest transition',
    variantClasses[variant] ?? variantClasses.secondary,
    className,
  ]
    .join(' ')
    .trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;
