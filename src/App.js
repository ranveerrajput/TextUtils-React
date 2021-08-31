import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
//import About from "./components/About";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
    msg: message,
    type: type
    })   

    setTimeout(() => {
      setAlert(null);
      
    }, 1500);
  };

  const toggleMode = ()=>{
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor='#21054d';
      showAlert("Dark mode has been Enabled","success");
    } else {
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been Enabled","success");
    }
  };

  return (
    <>
     {/*<Router>*/}
      <Navbar title="TEXTUTILES" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* <Switch>
          <Route exact  path="/about">
            <About />
          </Route>
        <Route exact path="/"> */}
          <TextForm heading="Enter the text to analyze below"   mode={mode} />
         {/*</Route*/}
      {/*</Switch>*/}
      </div>
      {/*</Router>*/}
    </>
  );
}

export default App;
