import React, { Fragment } from "react";
import { StyledListProducts } from "./StyledListProducts";

const ListProducts = ({ children }) => {
  return <StyledListProducts>{children}</StyledListProducts>;
};

export default ListProducts;
