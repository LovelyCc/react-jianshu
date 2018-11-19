import React, {Component} from 'react';
import Header from './common/header';
import {GlobalStyle} from './style';
import {GlobalIconfont} from './statics/iconfont/iconfont';
import {Provider} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';
import store from './store';
import 'antd/dist/antd.css';
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <GlobalStyle/>
                    <GlobalIconfont/>
                    <BrowserRouter>
                        <div>
                            <Header/>
                            <Route path='/' exact component={Home}></Route>
                            <Route path='/login' exact component={Login}></Route>
                            <Route path='/write' exact component={Write}></Route>
                            <Route path='/detail/:id' exact component={Detail}></Route>
                        </div>
                    </BrowserRouter>
                </div>
            </Provider>
        );
    }
}

export default App;
