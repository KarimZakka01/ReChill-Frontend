import * as React from 'react';
import './textfield.styles.css';
type TextFieldType = JSX.IntrinsicElements['input'];

export interface ITextFieldProps extends TextFieldType {
  label?: string;
}

export function TextField({ label, ...props }: ITextFieldProps) {
  return (
    <div className="rechill-textfield">
      {label && <label className="rechill-textfield-label">{label}</label>}
      <input {...props} className="rechill-textfield-input" />
    </div>
  );
}
