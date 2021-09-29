import Counter from "./Counter";
import CounterRedux from "./CounterRedux";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from "./reducer";


const defaultState = {
  count: 0,
  name: "John",
};

const store = createStore(reducer, defaultState,composeWithDevTools());

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
