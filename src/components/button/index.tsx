import * as React from 'react';
import './button.styles.css';
type ButtonType = JSX.IntrinsicElements['button'];

export interface IButtonProps extends ButtonType {
  variant?: 'outlined' | 'contained' | 'text';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Button({ variant, size = 'md', ...props }: IButtonProps) {
  return (
    <button
      className={`rechill-button rechill-button-${variant} rechill-button-${size}`}
      {...props}
    ></button>
  );
}
