import React, { ReactElement } from "react";

import {
  Select as SelectAria,
  SelectProps as SelectAriaProps,
  ListBox,
  ListBoxItem,
  Popover,
  Button,
  SelectValue,
  ListBoxProps,
  Pressable,
} from "react-aria-components";
import CloseIcon from "../../assets/images/closeIcon.svg?react";

interface SelectProps {
  isDisabled: SelectAriaProps["isDisabled"];
  onSelectionChange: SelectAriaProps["onSelectionChange"];
  selectedKey: SelectAriaProps["selectedKey"];
  selectValue: ReactElement;
  items: any;
  CustomListBox?: ReactElement<ListBoxProps<any>> | undefined;
  onClear: (e: React.MouseEvent) => void;
  className?: SelectAriaProps["className"];
  popoverClassName?: string;
}

export const Select = ({
  isDisabled,
  items,
  onSelectionChange,
  selectValue,
  selectedKey,
  CustomListBox = undefined,
  onClear,
  className = "",
  popoverClassName = "",
}: SelectProps) => {
  return (
    <SelectAria
      isDisabled={isDisabled}
      onSelectionChange={onSelectionChange}
      className={`flex column ${className}`}
      selectedKey={selectedKey}
    >
      <Button className="select-selected-value">
        {/* <SelectValue> */}
        <div className="flex align-center select-selected-value-item-container">
          <span>{selectValue}</span>
          <Pressable
            onClick={(ev) => {
              ev.stopPropagation();
              onClear(ev);
            }}
            isDisabled={!Boolean(selectedKey)}
          >
            <div
              className="flex align-center select-clear-button"
              data-show={!!selectedKey}
            >
              <CloseIcon />
            </div>
          </Pressable>
        </div>
        {/* </SelectValue> */}
      </Button>
      <Popover className={`select-popover ${popoverClassName}`}>
        {CustomListBox ? (
          CustomListBox
        ) : (
          <ListBox>
            {items.map((item: any) => (
              <ListBoxItem
                key={item}
                id={item}
                className="select-list-box-item"
              >
                <div>{item}</div>
              </ListBoxItem>
            ))}
          </ListBox>
        )}
      </Popover>
    </SelectAria>
  );
};
