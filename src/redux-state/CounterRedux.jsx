import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ClickHandler from "./ClickHandler";
import CounterDisplay from "./CounterDisplay";
import Reducer from "./Reducer";

const store = createStore(Reducer)

const CounterRedux = () =>
    <Provider store={store}>
        <div>
            <CounterDisplay/>
            <ClickHandler />
            <ClickHandler />
        </div>
    </Provider>


export default CounterRedux;