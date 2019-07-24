import React from 'react';
import { Provider, connect } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store from '../store';
import persistor from '../store/persistor';
import inject from '../store/inject';


import Component from './component';
import { testAction, reducer } from './redux';

const Container = connect(null, { testAction })(Component);

inject('test', reducer);

export default () => (
    <Provider store={store} >
        <PersistGate persistor={persistor}>
            <Container />
        </PersistGate>
    </Provider>
);

