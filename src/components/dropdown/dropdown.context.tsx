import * as React from 'react';
import { createContext, useState } from 'react';

export interface IDropdownContext {
  dropdownState: IDropdownState;
  toggleDropdown: () => void;
  changeValue: (value: IDropdownState['value']) => void;
}
export interface IDropdownState {
  showDropdown: boolean;
  value?: string | number;
}

export const DropDownContext = createContext<IDropdownContext>({
  dropdownState: { showDropdown: false },
  toggleDropdown: () => {},
  changeValue: () => {},
});

export function DropdownContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dropdownState, setDropdownState] = useState<IDropdownState>({
    showDropdown: false,
    value: undefined,
  });

  const toggleDropdown = () => {
    setDropdownState({
      ...dropdownState,
      showDropdown: !dropdownState.showDropdown,
    });
  };

  const changeValue = (value: IDropdownState['value']) => {
    setDropdownState({ ...dropdownState, value, showDropdown: false });
  };

  return (
    <DropDownContext.Provider
      value={{ dropdownState, toggleDropdown, changeValue }}
    >
      {children}
    </DropDownContext.Provider>
  );
}
