import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { FavoritesContextProvider } from './store/favorites-context';

//Here we have he Broswer router tag which wraps the app , this tag is neccessary when you Routes in your app as component tags

//This FavoriteCOntextProvider is a function in a favorites-context Component which is wrapping the whole app, signal if a Card is Listed in favorites or not

ReactDOM.render(
    <FavoritesContextProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </FavoritesContextProvider>
    , document.getElementById('root')
    );

