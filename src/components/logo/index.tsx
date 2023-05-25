import * as React from 'react';
import './logo.styles.css';
type ImageType = JSX.IntrinsicElements['img'];

export interface ILogoProps extends ImageType {
  size: 'xl' | 'lg' | 'md' | 'sm' | 'xsm';
  src: string;
  alt: string;
}

export function Logo({ size, alt, ...props }: ILogoProps) {
  return <img className={`logo ${size}`} alt={alt} {...props}></img>;
}
