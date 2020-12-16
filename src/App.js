import logo from './logo.svg';
import './App.css';
import  React,{useState} from 'react';
import firebase from './firebase';
import  ParentComponent from './ParentComponent';
import DynamicTable from "./DynamicTable";
import FunctionalComp from "./FunctionalComp";
import UseContextExample  from "./UseContextExample"
import {useContextname} from "./contextconfig";
import UsereducerExample  from "./UseReducerExample"
function App() {
const [value,setvalue]=useState("values from context provider");
  React.useEffect(()=>{
    const msg=firebase.messaging();
    msg.requestPermission().then(()=>{
      return msg.getToken();
    }).then((data)=>{
      console.warn("token",data)
    })
  })

  return (
    <div className="App">
      <useContextname.Provider  value={{value,setvalue}} >
      <FunctionalComp/>
      <UseContextExample/>
      </useContextname.Provider>
      <UsereducerExample/>
      {/* <DynamicTable/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ParentComponent/>
        <p>
         Progressive web apps 
        </p>
        <p>
       The futures are
        </p>
        <h4> 1.offline loading </h4>
        <h4> 2.push notification using firebase </h4>
        <h4> 3.adding web as a appicon in homescreen </h4>
      </header> */}
    </div>
  );
}

export default App;
