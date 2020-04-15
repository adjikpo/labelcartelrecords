import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/Home/Home.scss'
import Home from './components/Home/Home'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom'
import styled from 'styled-components'
import './fonts/Bahnscrift-font/BAHNSCHRIFT\ 14.TTF'
import Header from './components/Header/Header'

const BackgroundBlack = styled.div`
    background-color: black;
    height: 100%;
`;

  ReactDOM.render(
    <BackgroundBlack>
      <Header/>
     <Router>
      <div className='page-full'>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    </Router>

    </BackgroundBlack>
   
    , document.getElementById('root')
  )
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
