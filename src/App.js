import React from "react";
import ScrollToTop from "./utils/ScrollToTop";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Scenes/Homepage";
import { Grommet } from "grommet";
import { hpe } from "grommet-theme-hpe";
import ProductDetails from "./Scenes/ProductDetails";
import ShipmentPage from "./Scenes/ShipmentPage";
import CartPage from "./Scenes/CartPage";
import {customRoundedTheme} from './customRoundedTheme'
import { grommet } from "grommet/themes";

const App = () => {
  return (
    <ScrollToTop>
      <Switch>
        <Grommet full theme={customRoundedTheme || grommet}>
          <Route exact path="/" component={Homepage} />
          <Route path="/products/:category/:id" component={ProductDetails} />
          <Route exact path="/cart" component={CartPage} />
          <Route path="/cart/shipment" component={ShipmentPage} />
          <Route path="/user/:id/orders" component={Homepage} />
          <Route path="/user/:id/orders/:id" component={Homepage} />
          <Route path="/user/:id" component={Homepage} />
          <Route path="/seller/:id" component={Homepage} />
          <Route path="/seller/orders" component={Homepage} />
          <Route path="/seller/orders/:id" component={Homepage} />
          <Route path="/signup" component={Homepage} />
          <Route path="/signin" component={Homepage} />
        </Grommet>
      </Switch>
    </ScrollToTop>
  );
};

export default App;
