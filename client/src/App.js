// importing the React from react
import React from 'react';
// importing the bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// importing the css file
import './App.css';
// importing the Workspace component
import Workspace from './Components/Workspace/Workspace'

function App() {
  return (
    <div className="container-fluid">
      {/* adding the Workspace component */}
      <Workspace />
    </div>
  );
}
// exporting
export default App;
