import React, { useState, Fragment } from "react";
import AppBar from "../../components/AppBar";
import { CheckBox } from "grommet";
import ContentContainer from "../../components/ContentContainer";
import ListContainer from "../../components/ListContainer";
import SummaryCart from "../../components/SummaryCart";
import ProductPreviewCart from "../../components/ProductPreviewCart";

const CartPage = ({ checked: checkedProp }) => {
  const [checked, setChecked] = useState(!!checkedProp);
  const onChange = event => setChecked(event.target.checked);

  return (
    <Fragment>
      <AppBar />
      <ContentContainer grid columns={["3/4", "1/4"]} pad="medium" gap="medium">
        <ListContainer>
          <div className="checkbox-all-product-ordered">
            <CheckBox checked={checked} label="all" onChange={onChange} />
          </div>
          <ProductPreviewCart />
        </ListContainer>
        <SummaryCart />
      </ContentContainer>
    </Fragment>
  );
};

export default CartPage;
