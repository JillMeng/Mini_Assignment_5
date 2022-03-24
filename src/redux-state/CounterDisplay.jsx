import React from "react";
import { connect } from "react-redux";

const CounterDisplay = ({myCount}) =>
<h1>
    Count: {myCount}
</h1>

const stpm = (state) => {
    return {
        myCount: state.totalCount
    }
}

export default connect(stpm)(CounterDisplay)