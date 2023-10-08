// import logo from './logo.svg';
import About from './components/About';
// import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";



// let name = "Visharad";
  function App() {
  
  const [alert , setalert] = useState(null)
  const myalert = (message , type) => {
      setalert({
        message : message,
        type : type
      })
      setTimeout(() => {
        setalert(null)
      }, 2000);
  }
  const [mode , setmode] = useState('light')
 const togglestyle = () => {  
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#0a2037'
      myalert("Dark Mode has been enabled","Success")
      document.title = "Text Utility App-Dark Mode"
      setTimeout(() => {
        document.title = "Text Utility App"
      }, 2000);
      
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
      myalert("Light Mode has been enabled","Success")
      document.title = "Text Utility App-Light Mode"
      setTimeout(() => {
        document.title = "Text Utility App"
      }, 2000);
      
    }
  }
  return (
    <div>
      <Router>
    <Navbar title ="TextUtils" abouttext = "About" mode = {mode} togglestyle = {togglestyle}/>
    <Alert alert = {alert}/>
    
  <Routes>
    <Route exact path="/" element={<TextForm heading = "Enter the text to analyze below " mode = {mode}/>}/>
    <Route exact path= '/about' element={<About mode = {mode}/>}/>
  </Routes>
      
      </Router>


  {/* {
    path: "/",
    element: <Link to="about"><TextForm heading= "Enter the text to analyze below " mode = {mode}/>x` </Link>
  }, */}


{/* createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
); */}
 
      {/* <Navbar/> */}      
    </div>
  );
}

export default App;
