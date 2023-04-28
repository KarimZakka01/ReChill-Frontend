import { Button } from '@components/button';
import { useContext, useEffect } from 'react';
import { DropDownContext, DropdownContextProvider } from './dropdown.context';
import './dropdown.styles.css';

type DropdownProps = JSX.IntrinsicElements['div'];

export interface IDropdownProps extends DropdownProps {
  label: string;
  children: React.ReactNode;
  onChange?: (value: any) => void;
}

export interface IDropdownItemProps {
  children: string;
  value: string | number;
}

export function DropdownItem({ children, value }: IDropdownItemProps) {
  const { changeValue } = useContext(DropDownContext);
  return (
    <div
      className="dropdown-item"
      onClick={(event) => {
        changeValue(value);
      }}
    >
      {children}
    </div>
  );
}

function DropdownWithContext({ label, children, onChange }: IDropdownProps) {
  const { dropdownState, toggleDropdown } = useContext(DropDownContext);

  useEffect(() => {
    onChange && onChange(dropdownState.value);
  }, [dropdownState.value, onChange]);

  return (
    <div className="dropdown-container">
      <Button onClick={toggleDropdown}>{dropdownState.value || label} ↓</Button>

      <div
        className={`dropdown${
          dropdownState.showDropdown ? '' : ' dropdown-hidden'
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export function Dropdown({ label, children, onChange }: IDropdownProps) {
  return (
    <DropdownContextProvider>
      <DropdownWithContext
        label={label}
        children={children}
        onChange={onChange}
      />
    </DropdownContextProvider>
  );
}
