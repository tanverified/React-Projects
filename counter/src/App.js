import Counter from "./Counter";
import CounterRedux from "./CounterRedux";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import countReducer from "./count_reducer";


const defaultState = {
  count: 0,
  name: "John",
};

const store = createStore(countReducer, defaultState,composeWithDevTools());

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Counter />
        <CounterRedux />
      </div>
    </Provider>
  );
}

export default App;
