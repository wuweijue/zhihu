import React from 'react';

import { GlobalStyled } from './styled'

import { BrowserRouter as Router ,Route } from 'react-router-dom'

import { Provider } from 'react-redux'

import store from './store'

import Header from './common/header'

function App() {
  return (
      <Provider store={store}>
          <div className='App'>
              <GlobalStyled/>
              <Header/>
              <Router>
                  <Route/>
              </Router>
          </div>
      </Provider>
  );
}

export default App;
