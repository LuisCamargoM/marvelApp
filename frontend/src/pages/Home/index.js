import React, { Component } from "react";
import Menu from '../../components/Menu';
import Grid from '../../components/Grid';

import cartReducer from '../../components/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(cartReducer);

class Home extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="Home">
                    <Menu/>
                    <Grid/>                
                </div>        
            </Provider>
        );
    }
};

export default Home;