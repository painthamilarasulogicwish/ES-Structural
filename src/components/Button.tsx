import { ButtonHTMLAttributes, ReactNode, useState, MouseEvent } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
}

interface Ripple {
  x: number;
  y: number;
  id: number;
}

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }: ButtonProps) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const createRipple = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      x,
      y,
      id: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    createRipple(e);
    if (props.onClick) {
      props.onClick(e);
    }
  };

  const baseStyles = 'font-semibold rounded-md transition-all duration-300 inline-flex items-center justify-center relative overflow-hidden group';

  const variantStyles = {
    primary: 'bg-primary-blue text-white hover:bg-secondary-blue hover:shadow-xl hover:scale-105 active:scale-95',
    secondary: 'bg-secondary-blue text-white hover:bg-primary-blue hover:shadow-xl hover:scale-105 active:scale-95',
    accent: 'bg-accent-green text-primary-text hover:bg-opacity-90 hover:shadow-xl hover:scale-105 active:scale-95',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
      onClick={handleClick}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ripple pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 10,
            height: 10,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </button>
  );
};

export default Button;
