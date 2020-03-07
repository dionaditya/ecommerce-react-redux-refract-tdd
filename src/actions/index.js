import { createAction } from "redux-actions";

import { PRODUCTS_TYPES } from "../types/types";

export function fetchProducts() {
    return{
        type: 'GET_PRODUCTS'
    }
}


export function fetchProductsSuccess(payload) {
    return{
        type: 'GET_PRODUCTS_SUCCESS',
        payload
    }
}
