// import { configureStore } from '@reduxjs/toolkit';
import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReducer } from "./reducer";

// export const store = configureStore({
//     reducer: {},
// })


const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);