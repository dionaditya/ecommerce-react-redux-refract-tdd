import { createStore } from "redux";
import rootReducers from "../reducers/index";
import { refractEnhancer } from "refract-redux-xstream";
import { composeWithDevTools } from 'redux-devtools-extension'

const storeConfig = createStore(
	rootReducers,
	composeWithDevTools(refractEnhancer())
);

export default storeConfig;