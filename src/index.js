import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import storeConfig from "./store/index";
import { BrowserRouter } from "react-router-dom";
import xs from 'xstream'
import {fetchProductsSuccess} from './actions'
import { withEffects } from 'refract-xstream'
import {PRODUCTS_TYPES} from './types/types'

const aperture = (_, {store}) => {
  const getProducts$ = store.observe('GET_PRODUCTS')
  const count$ = xs.from(getProducts$)
      .map(() =>
          xs.fromPromise(
              fetch(`http://localhost:3000/products`).then(res =>
                  res.json()
              )
          )
      )
       .flatten()
       .map( data => {
          return  store.dispatch(fetchProductsSuccess(data.data))
         }
         
       )
     
  return count$
}

const handler = ({store}) => effect => {
  return effect
}

const AppWithEffects = withEffects(aperture, {handler})(App);

const Root = () => {
  return (
    <Provider store={storeConfig}>
      <BrowserRouter>
        <AppWithEffects store={storeConfig} />
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
