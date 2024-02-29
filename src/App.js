import './App.css';
import {useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dm is enabled or not 
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
     setAlert(
      {
        msg:message,
        type:type
      }
     )
     setTimeout(()=>{
         setAlert(null);
     },2000)
  }
  const toggleMode = ()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enabled!","success")
      document.title = 'TextUtils-Home'
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode Enabled!","success")
      document.title = 'TextUtils-Dark Mode Enabled';
    }
  }

  return (
    <>
     <Router> 
    <Navbar aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />  {/* aboutText proptype is string */}
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* function received as a prop */}
      <Routes>
          <Route exact path="/about" element={<About/>}>
            
          </Route>
        
          <Route exact path="/" element={<TextForm heading="Enter Your Text Here : " showAlert={showAlert} mode={mode} />}>
          
           
          </Route>
        </Routes>
      
      
      </div>
    </Router>
    </>
  );
}

export default App;
