import { useState } from "react";

import { GoChevronRight, GoChevronUp } from "react-icons/go";

import {
  Dropdown,
  DropdownBody,
  DropdownHeader,
  DropdownItem,
  DropdownItemDot,
} from "./styles";

interface ISelect {
  options: [{ id: number; label: string; value: string }] | any;
  sort?: (value: any) => void;
  order?: (value: any) => void;
  type?: (value: any) => void;
}

export function Select({ options, sort, order, type }: ISelect) {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(options);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (item: any) => {
    selectedItem == item.id ? setSelectedItem(null) : setSelectedItem(item.id);

    if (sort) {
      sort(item.value);
    } else if (order) {
      order(item.value);
    } else if (type) {
      type(item.value);
    }
  };

  return (
    <Dropdown className="dropdown">
      <DropdownHeader onClick={toggleDropdown}>
        {selectedItem
          ? items?.find((item: any) => item.id == selectedItem).label
          : "Selecione"}
        {isOpen ? <GoChevronUp /> : <GoChevronRight />}
      </DropdownHeader>
      <DropdownBody style={{ display: isOpen ? "block" : "none" }}>
        {items.map((item: any) => (
          <DropdownItem
            onClick={(e) => {
              handleItemClick(item), setOpen(!isOpen);
            }}
            id={item.id}
          >
            <DropdownItemDot
              className={`${item.id == selectedItem && "selected"}`}
            >
              •{" "}
            </DropdownItemDot>
            {item.label}
          </DropdownItem>
        ))}
      </DropdownBody>
    </Dropdown>
  );
}
