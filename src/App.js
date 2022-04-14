

import './App.css';
//import './switcher.scss'
//import { BrowserRouter, Routes, Route} from "react-router-dom";


//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [btnLbl, setLabel] = useState('Enable DarkMode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);

    }, 1500);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setLabel('Disable DarkMode')
      document.body.style.backgroundColor = '#042743'
      showAlert("DarkMode has been Enabled", "success")
    }
    else {
      setMode('light');
      setLabel('Enable DarkMode')
      document.body.style.backgroundColor = 'white'
      showAlert("DarkMode has been Disabled", "success")
    }
  }
  return (
    <>
    {/* <BrowserRouter> */}
    <Navbar title='TextUtils'aboutTitle ="About Us" mode={mode} toggleMode={toggleMode} btnLbl={btnLbl} />
      <Alert alert={alert} />
      <div className='container ny-3'>
      <Textform heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
      {/* <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<Textform heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
         */}
      
             </div>
    {/* </BrowserRouter>  */}
  

     
      </>
      );
}

      export default App;
