import actionTypeCreator, { SYNC, ASYNC } from "redux-action-types-creator";

const actionType = actionTypeCreator("product");

export const PRODUCTS_TYPES = actionType({
  PRODUCT: {
    FETCH: ASYNC,
  }
});

export const ORDER_TYPES = actionType({
  ORDER: {
    FETCH: ASYNC,
    CREATE: SYNC,
  }
});


