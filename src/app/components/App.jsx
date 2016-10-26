import React, { PropTypes } from 'react';
import Header from './common/header/Header';

function App({ children }) {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
}

App.propTypes = { children: PropTypes.object };

export default App;
