const initialState = {
    boxOn: -1,
    totalCount: 0
}

const Reducer = (prevState =initialState, action) => {
    switch (action.type) {
        case "Clicked" :
            return {
                boxOn: prevState.boxOn * -1,
                totalCount: prevState.boxOn + prevState.boxOn * -1
            }
        default: return prevState
    }
}

export default Reducer
