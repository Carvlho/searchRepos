import styled from "styled-components";

export const Dropdown = styled.div`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

export const DropdownHeader = styled.div`
  padding: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DropdownBody = styled.div`
  position: absolute;
  padding: 5px;
  border-top: 1px solid #e5e8ec;
  display: none;
  width: 200px;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  background-color: white;

  z-index: 99;
`;

export const DropdownItem = styled.div`
  padding: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const DropdownItemDot = styled.div`
  opacity: 0;
  color: #91a5be;
  transition: all 0.2s ease-in-out;
`;
