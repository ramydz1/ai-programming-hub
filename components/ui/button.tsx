import * as React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    const baseStyles = 'font-semibold rounded-lg transition duration-200 flex items-center justify-center gap-2';
    
    const variantStyles = {
      default: 'bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800',
      outline: 'border border-slate-700 text-slate-300 hover:bg-slate-800',
      ghost: 'hover:bg-slate-800 text-slate-300'
    };

    const sizeStyles = {
      sm: 'px-3 py-1 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg'
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
export { Button }
