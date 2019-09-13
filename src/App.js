import React from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/styles/main.css';
import './assets/styles/bootstrap.min.css';
import Routes from './routes/route';

// import component
import Header from './components/header';


function App() {
  return (
    <div className="App container-fluid px-0 ">
      <Header />
      <div className="container">
        <div className="row   justify-content-center">
          <div className="col-12" style={{ maxWidth: '480px', paddingBottom: '100px' }}>
            <Routes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
