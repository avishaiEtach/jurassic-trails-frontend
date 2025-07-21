import React, { useRef, useState } from "react";
import {
  ComboBox,
  ComboBoxProps,
  Input,
  ListBox,
  ListBoxItem,
  Popover,
} from "react-aria-components";
import CloseIcon from "../../assets/images/closeIcon.svg?react";

interface AutocompleteProps {
  value: ComboBoxProps<any>["defaultInputValue"];
  onSelectionChange: ComboBoxProps<any>["onSelectionChange"];
  onBlur: ComboBoxProps<any>["onBlur"];
  placeholder?: string | undefined;
  onClose: React.MouseEventHandler<HTMLButtonElement> | undefined;
  items: any[];
  keyId: any;
  displayKey: any;
  buttonShow: boolean;
}

export const Autocomplete = ({
  displayKey,
  items,
  keyId,
  onBlur,
  onClose,
  onSelectionChange,
  value,
  buttonShow,
  placeholder = undefined,
}: AutocompleteProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState(value);

  return (
    <div
      onClick={() => {
        inputRef.current?.focus();
      }}
      ref={containerRef}
    >
      <ComboBox
        inputValue={inputValue}
        onInputChange={setInputValue}
        // defaultInputValue={value}
        onSelectionChange={onSelectionChange}
        onBlur={onBlur}
        allowsCustomValue={true}
        className="autocomplete-combo-box"
      >
        <div className="flex">
          <Input
            ref={inputRef}
            className="autocomplete-input"
            placeholder={placeholder}
          />
          <button
            type="button"
            data-show={buttonShow}
            className="autocomplete-clear-button"
            onClick={(ev) => {
              if (onClose) {
                onClose(ev);
                setInputValue("");
              }
            }}
          >
            <CloseIcon />
          </button>
        </div>
        <Popover className="autocomplete-popover">
          <ListBox>
            {items.slice(0, 8).map((item) => (
              <ListBoxItem
                className="autocomplete-list-box-item"
                id={item[keyId]}
                key={item[keyId]}
              >
                {item[displayKey]}
              </ListBoxItem>
            ))}
          </ListBox>
        </Popover>
      </ComboBox>
    </div>
  );
};
