import {render} from "react-dom"
import App from "./App";
import './main.scss'
import {applyMiddleware, createStore} from 'redux';
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { loginUser } from "./actions/UserActions";

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

store.dispatch(loginUser(1));

render(<Provider store={store}><App /></Provider>, document.getElementById("root"));