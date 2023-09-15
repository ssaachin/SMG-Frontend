import React from 'react';
import Home from './Components/HomePage';
import Login from './Components/Login';

import { 
 BrowserRouter as Router, 
 Route, 
 Link,
 Routes
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='dashboard' Component={Login} />
      </Routes>
    </Router>
  );
}

export default App;



