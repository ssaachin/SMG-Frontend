import React from 'react';
import Home from './Components/HomePage';
import Admin from './Components/Admin';

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
        <Route path='dashboard' Component={Admin} />
      </Routes>
    </Router>
  );
}

export default App;



