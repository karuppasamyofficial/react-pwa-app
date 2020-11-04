import logo from './logo.svg';
import './App.css';
import  React from 'react';
import firebase from './firebase';
function App() {

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Progressive web apps 
        </p>
        <p>
       The futures are
        </p>
        <h4> 1.offline loading </h4>
        <h4> 2.push notification using firebase </h4>
        <h4> 3.adding web as a appicon in homescreen </h4>
      </header>
    </div>
  );
}

export default App;
