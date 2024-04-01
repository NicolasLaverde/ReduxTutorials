const redux = require('redux')
const defaultState = {
    counter: 0
}
const counterReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'increment': 
            console.log('increment ome ')
            return {
                counter: state.counter + 1 
            }
        case 'decrement': 
            return {
                counter: state.counter - 1 
            }
        default: 
            return state
    }
}

const store = redux.createStore(counterReducer)

const counterSubscriber = () => {
    const latestState = store.getState()
    console.log(latestState)
}

store.subscribe(counterSubscriber)

store.dispatch({ type: 'increment' })
store.dispatch({ type: 'decrement' })
