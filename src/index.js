import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {changeSessionReducer, userActiveReducer} from "./reducers/user";
import Root from "./Root";


ReactDOM.render(<Root>
    <App/>
</Root>, document.querySelector('#root'));