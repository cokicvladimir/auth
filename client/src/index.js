import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import Feature from './components/Feature';
import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    {
        auth: { authenticated: localStorage.getItem('token') }
    },
    composeEnhancers(
    applyMiddleware(reduxThunk)
));

ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter>
            <App>
                <Route path='/' component={Welcome} exact />
                <Route path='/signup' component={Signup} />
                <Route path='/feature' component={Feature} />
                <Route path='/signout' component={Signout} />
                <Route path='/signin' component={Signin} />
            </App>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);

