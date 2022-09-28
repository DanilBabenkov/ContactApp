import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {setupStore} from "./redux/store";
import {Provider} from "react-redux";

const container = document.getElementById('root')
let root
if (container) root = createRoot(container)

const store = setupStore()

if (root) {
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    );

}
